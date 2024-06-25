import { CheckboxItem } from './CheckBoxItem';
import { Tooltip } from './Tooltip';
import { similarCharacters, useLetters } from '../hooks/usePasswordGenerator';
import { Options } from '../type/types';

type CheckboxGroupProps = {
  options: Options;
  handleChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type CheckboxItem = {
  id: string;
  label: string;
  withTooltip: boolean;
  tooltipTitle?: string;
  tooltipContent?: string;
};

const checkboxItems: CheckboxItem[] = [
  { id: 'uppercase', label: '英大文字', withTooltip: false },
  { id: 'lowercase', label: '英小文字', withTooltip: false },
  { id: 'numbers', label: '数字', withTooltip: false },
  {
    id: 'symbols',
    label: '記号',
    withTooltip: true,
    tooltipTitle: '使用する記号：',
    tooltipContent: useLetters.symbols,
  },
  {
    id: 'excludeSimilar',
    label: '似通った文字を省く',
    withTooltip: true,
    tooltipTitle: '省く文字:',
    tooltipContent: similarCharacters.join(', '),
  },
  { id: 'noRepeat', label: '同じ文字が2回続かない', withTooltip: false },
];

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
