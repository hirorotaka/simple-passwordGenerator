import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { PasswordSlider } from './PasswordSlider';

type PasswordOptionProps = {
  sliderValue: number;
  setSliderValue: Dispatch<SetStateAction<number>>;

  options: {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
    excludeSimilar: boolean;
    noRepeat: boolean;
  };

  setOptions: Dispatch<
    SetStateAction<{
      uppercase: boolean;
      lowercase: boolean;
      numbers: boolean;
      symbols: boolean;
      excludeSimilar: boolean;
      noRepeat: boolean;
    }>
  >;
};

export const PasswordOption = ({
  sliderValue,
  setSliderValue,
  options,
  setOptions,
}: PasswordOptionProps) => {
  // チェックボックスでチェックしたらstateに反映
  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;

    setOptions((prevOptions) => ({
      ...prevOptions,
      [id]: checked,
    }));
  };

  return (
    <div className="mb-6 rounded-lg border-2 border-dashed border-gray-300 p-4">
      <h2 className="mb-4 text-lg font-semibold">オプション</h2>
      <PasswordSlider
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
      />
      <CheckboxGroup
        options={options}
        handleChangeCheckbox={handleChangeCheckbox}
      />
    </div>
  );
};
