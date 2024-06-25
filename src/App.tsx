import './App.css';

function App() {
  return (
    <>
      <div className="m-auto mt-8 w-96 rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">
          パスワード生成ツール
        </h1>

        <div className="mb-6 rounded-lg border-2 border-dashed border-gray-300 p-4">
          <h2 className="mb-4 text-lg font-semibold">オプション</h2>
          <div className="mb-4 flex items-center justify-between">
            <label htmlFor="length" className="mr-4">
              長さ:
            </label>
            <input
              type="range"
              id="length"
              min="8"
              max="32"
              // value="12"
              className="w-1/2"
            />
            <span id="lengthValue" className="ml-2">
              12
            </span>
          </div>
          <div className="flex flex-wrap">
            <label className="mb-2 mr-4 flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                id="uppercase"
                defaultChecked
              />
              大文字
            </label>
            <label className="mb-2 mr-4 flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                id="lowercase"
                defaultChecked
              />
              小文字
            </label>
            <label className="mb-2 mr-4 flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                id="numbers"
                defaultChecked
              />
              数字
            </label>
            <label className="mb-2 flex items-center">
              <input type="checkbox" className="mr-2" id="symbols" />
              記号
            </label>
          </div>
        </div>

        <button
          id="generate"
          className="w-full rounded bg-blue-500 py-2 text-white transition duration-300 hover:bg-blue-600"
        >
          パスワードを生成
        </button>

        <div className="relative mt-4">
          <input
            type="text"
            id="password"
            readOnly
            className="w-full rounded border p-2"
            placeholder="生成されたパスワード"
          />
          <button
            id="copy"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
