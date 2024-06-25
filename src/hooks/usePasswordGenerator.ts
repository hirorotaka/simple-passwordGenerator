import { useEffect, useState } from 'react';
import { Options } from '../type/types';

type useLettersType = 'uppercase' | 'lowercase' | 'numbers' | 'symbols';

// 文字のリスト
export const useLetters: Record<useLettersType, string> = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()',
};

// 類似文字のリスト
export const similarCharacters: readonly string[] = [
  '1',
  'I',
  'j',
  'i',
  'l',
  'O',
  'o',
  'L',
  'Z',
];

const initialOptions: Options = {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: false,
  excludeSimilar: false,
  noRepeat: false,
};

interface usePasswordGeneratorReturn {
  password: string;
  options: typeof initialOptions;
  sliderValue: number;
  isGenerateButtonDisabled: boolean;
  setOptions: React.Dispatch<React.SetStateAction<typeof initialOptions>>;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
  handleGeneratePassword: () => void;
}

export const usePasswordGenerator = (): usePasswordGeneratorReturn => {
  const [password, setPassword] = useState<string>('aaaa');
  const [options, setOptions] = useState(initialOptions);
  const [isGenerateButtonDisabled, setIsGenerateButtonDisabled] =
    useState(false);
  const [sliderValue, setSliderValue] = useState<number>(8);

  // 生成ボタンの無効化
  useEffect(() => {
    const isAnyOptionChecked =
      options.uppercase ||
      options.lowercase ||
      options.numbers ||
      options.symbols;
    setIsGenerateButtonDisabled(!isAnyOptionChecked);
  }, [options]);

  // 文字の生成
  const createCharacterPool = (): string => {
    let characterPool = '';
    if (options.uppercase) characterPool += useLetters.uppercase;
    if (options.lowercase) characterPool += useLetters.lowercase;
    if (options.numbers) characterPool += useLetters.numbers;
    if (options.symbols) characterPool += useLetters.symbols;
    return characterPool;
  };

  // パスワードの生成
  const generatePassword = (
    characterPool: string,
    excludeSimilar: boolean,
    noRepeat: boolean
  ): string => {
    // 類似文字の除外
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

  // パスワードの生成
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

  return {
    password,
    options,
    setOptions,
    isGenerateButtonDisabled,
    handleGeneratePassword,
    sliderValue,
    setSliderValue,
  };
};
