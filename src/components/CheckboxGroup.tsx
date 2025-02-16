import { ChangeEvent } from 'react';
import { CheckboxItem } from './CheckBoxItem';
import { Tooltip } from './Tooltip';
import { Options } from '../types';
import { checkboxItems } from '../constants';

type CheckboxGroupProps = {
  options: Options;
  handleChangeCheckbox: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const CheckboxGroup = ({
  options,
  handleChangeCheckbox,
}: CheckboxGroupProps) => {
  return (
    <div className="flex flex-wrap">
      {checkboxItems.map((item) =>
        item.withTooltip ? (
          <Tooltip
            key={item.id}
            title={item.tooltipTitle ?? ''}
            content={item.tooltipContent ?? ''}
          >
            <CheckboxItem
              id={item.id}
              label={item.label}
              checked={options[item.id as keyof Options]}
              onChange={handleChangeCheckbox}
            />
          </Tooltip>
        ) : (
          <CheckboxItem
            key={item.id}
            id={item.id}
            label={item.label}
            checked={options[item.id as keyof Options]}
            onChange={handleChangeCheckbox}
          />
        )
      )}
    </div>
  );
};
