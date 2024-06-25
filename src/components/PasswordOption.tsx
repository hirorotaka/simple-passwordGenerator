interface Props {
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;

  options: {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
    excludeSimilar: boolean;
    noRepeat: boolean;
  };

  setOptions: React.Dispatch<
    React.SetStateAction<{
      uppercase: boolean;
      lowercase: boolean;
      numbers: boolean;
      symbols: boolean;
      excludeSimilar: boolean;
      noRepeat: boolean;
    }>
  >;
}

export const PasswordOption = ({
  sliderValue,
  setSliderValue,
  options,
  setOptions,
}: Props): JSX.Element => {
  const handleChangeSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

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
      <div className="flex flex-wrap">
        <label className="mb-2 mr-4 flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            id="uppercase"
            checked={options.uppercase}
            onChange={handleChangeCheckbox}
          />
          大文字
        </label>
        <label className="mb-2 mr-4 flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            id="lowercase"
            checked={options.lowercase}
            onChange={handleChangeCheckbox}
          />
          小文字
        </label>
        <label className="mb-2 mr-4 flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            id="numbers"
            checked={options.numbers}
            onChange={handleChangeCheckbox}
          />
          数字
        </label>
        <label className="mb-2  mr-4 flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            id="symbols"
            checked={options.symbols}
            onChange={handleChangeCheckbox}
          />
          記号
        </label>
        <label className="mb-2 mr-4 flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            id="excludeSimilar"
            checked={options.excludeSimilar}
            onChange={handleChangeCheckbox}
          />
          似通った英数字を省く
        </label>
        <label className="mb-2 mr-4 flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            id="noRepeat"
            checked={options.noRepeat}
            onChange={handleChangeCheckbox}
          />
          同じ文字が2回続かない
        </label>
      </div>
    </div>
  );
};
