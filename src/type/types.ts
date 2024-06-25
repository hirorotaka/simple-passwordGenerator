export interface PasswordOptionProps {
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

export interface PasswordSliderProps {
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
}

export interface PasswordCheckboxProps {
  title: string;
  useLetter: string;
  option: boolean;
  handleChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Options {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  excludeSimilar: boolean;
  noRepeat: boolean;
}
