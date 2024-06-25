import './App.css';
import { ToolTitle } from './components/ToolTitle.tsx';
import { PasswordOption } from './components/PasswordOption.tsx';
import { GeneratePasswordButton } from './components/GeneratePasswordButton.tsx';
import { PasswordText } from './components/PasswordText.tsx';
import { useState, useEffect } from 'react';

const useLetters = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()',
};

const similarCharacters = ['1', 'I', 'j', 'i', 'l', 'O', 'o', 'L', 'Z'];

const initialOptions = {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: false,
  excludeSimilar: false,
  noRepeat: false,
};

function App() {
  const [password, setPassword] = useState<string>('aaaa');
  const [sliderValue, setSliderValue] = useState<number>(8);
  const [options, setOptions] = useState(initialOptions);
  const [isGenerateButtonDisabled, setIsGenerateButtonDisabled] =
    useState(false);

  useEffect(() => {
    const isAnyOptionChecked =
      options.uppercase ||
      options.lowercase ||
      options.numbers ||
      options.symbols;
    setIsGenerateButtonDisabled(!isAnyOptionChecked);
  }, [options]);

  const createCharacterPool = (): string => {
    let characterPool = '';
    if (options.uppercase) characterPool += useLetters.uppercase;
    if (options.lowercase) characterPool += useLetters.lowercase;
    if (options.numbers) characterPool += useLetters.numbers;
    if (options.symbols) characterPool += useLetters.symbols;
    return characterPool;
  };

  const generatePassword = (
    characterPool: string,
    excludeSimilar: boolean,
    noRepeat: boolean
  ): string => {
    if (excludeSimilar) {
      characterPool = characterPool
        .split('')
        .filter((char) => !similarCharacters.includes(char))
        .join('');
    }

    let password = '';
    let previousChar = '';

    // リピート防止の場合は、生成されたパスワードが２回繰り返されるのを防止
    while (password.length < sliderValue) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      const randomChar = characterPool[randomIndex];

      if (noRepeat && randomChar === previousChar) {
        continue;
      }

      password += randomChar;
      previousChar = randomChar;
    }
    return password;
  };

  const handleGeneratePassword = () => {
    const characterPool = createCharacterPool();

    if (characterPool.length === 0) {
      alert('少なくとも1つのオプションを選択してください。');
      return;
    }

    const password = generatePassword(
      characterPool,
      options.excludeSimilar,
      options.noRepeat
    );
    setPassword(password);
  };

  return (
    <>
      <div className="m-auto mt-8 w-96 rounded-lg bg-white p-8 shadow-lg">
        <ToolTitle />
        <PasswordOption
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
          options={options}
          setOptions={setOptions}
        />
        <GeneratePasswordButton
          handleGeneratePassword={handleGeneratePassword}
          isGenerateButtonDisabled={isGenerateButtonDisabled}
        />
        <PasswordText password={password} />
      </div>
    </>
  );
}

export default App;
