type useLettersType = 'uppercase' | 'lowercase' | 'numbers' | 'symbols';

type CheckboxItem = {
  id: string;
  label: string;
  withTooltip: boolean;
  tooltipTitle?: string;
  tooltipContent?: string;
};

// 文字のリスト
export const useLetters: Record<useLettersType, string> = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()',
};

// 類似文字のリスト
export const similarCharacters: readonly string[] = [
  '1',
  'I',
  'j',
  'i',
  'l',
  'O',
  'o',
  'L',
  'Z',
];

export const checkboxItems: CheckboxItem[] = [
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
