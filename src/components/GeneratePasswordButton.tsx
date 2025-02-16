type GeneratePasswordButtonProps = {
  handleGeneratePassword: () => void;
  isGenerateButtonDisabled: boolean;
};

export const GeneratePasswordButton = ({
  handleGeneratePassword,
  isGenerateButtonDisabled,
}: GeneratePasswordButtonProps) => {
  return (
    <button
      onClick={handleGeneratePassword}
      disabled={isGenerateButtonDisabled}
      className={`w-full rounded-lg bg-blue-500 px-4 py-2 text-white ${isGenerateButtonDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-600'}`}
    >
      パスワード生成
    </button>
  );
};
