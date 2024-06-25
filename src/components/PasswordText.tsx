import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface Props {
  password: string;
}

export const PasswordText = ({ password }: Props): JSX.Element => {
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
        id="copy"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-700"
      >
        <ContentCopyIcon />
      </button>
    </div>
  );
};
