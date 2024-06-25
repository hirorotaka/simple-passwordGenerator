import { PasswordOptionProps } from '../type/types';
import { CheckboxGroup } from './CheckboxGroup';
import { PasswordSlider } from './PasswordSlider';

export const PasswordOption = ({
  sliderValue,
  setSliderValue,
  options,
  setOptions,
}: PasswordOptionProps): JSX.Element => {
  // チェックボックスでチェックしたらstateに反映
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
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
