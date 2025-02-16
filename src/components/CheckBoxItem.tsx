import { ChangeEvent } from 'react';

type CheckboxItemProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const CheckboxItem = ({
  id,
  label,
  checked,
  onChange,
}: CheckboxItemProps) => (
  <label className="mb-2 mr-4 flex items-center">
    <input
      type="checkbox"
      className="mr-2"
      id={id}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
);
