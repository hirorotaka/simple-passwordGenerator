import { ChangeEvent } from 'react';

export type PasswordCheckboxProps = {
  title: string;
  useLetter: string;
  option: boolean;
  handleChangeCheckbox: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type Options = {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  excludeSimilar: boolean;
  noRepeat: boolean;
};
