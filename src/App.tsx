import { ToolTitle } from './components/ToolTitle.tsx';
import { PasswordOption } from './components/PasswordOption.tsx';
import { GeneratePasswordButton } from './components/GeneratePasswordButton.tsx';
import { PasswordText } from './components/PasswordText.tsx';
import { usePasswordGenerator } from './hooks/usePasswordGenerator.ts';
import './App.css';

function App() {
  const {
    password,
    options,
    setOptions,
    isGenerateButtonDisabled,
    handleGeneratePassword,
    sliderValue,
    setSliderValue,
  } = usePasswordGenerator();
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
