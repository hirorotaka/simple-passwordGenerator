import { PasswordSliderProps } from '../type/types';

export const PasswordSlider = ({
  sliderValue,
  setSliderValue,
}: PasswordSliderProps) => {
  const handleChangeSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };
  return (
    <div className="mb-4 flex items-center justify-between">
      <label htmlFor="length" className="mr-4">
        長さ:
      </label>
      <input
        type="range"
        id="length"
        min="4"
        max="24"
        onChange={handleChangeSlider}
        value={sliderValue}
        className="w-1/2"
      />
      <span id="lengthValue" className="ml-2">
        {sliderValue}
      </span>
    </div>
  );
};
