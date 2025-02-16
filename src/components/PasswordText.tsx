import { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

type PasswordTextProps = {
  password: string;
};

export const PasswordText = ({ password }: PasswordTextProps) => {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // テキストコピー
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setShowTooltip(true);
      setTimeout(() => setCopied(false), 1000);
      setTimeout(() => setShowTooltip(false), 1000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative mt-4">
      <input
        type="text"
        id="password"
        value={password}
        readOnly
        className="w-full rounded border p-2"
        placeholder="生成されたパスワード"
      />
      <button
        onClick={handleCopy}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-700"
      >
        {copied ? <CheckIcon /> : <ContentCopyIcon />}
      </button>
      {showTooltip && (
        <div className="absolute right-2 top-full mt-2 w-max rounded bg-gray-700 px-2 py-1 text-sm text-white">
          {copied ? 'コピーしました' : ''}
        </div>
      )}
    </div>
  );
};
