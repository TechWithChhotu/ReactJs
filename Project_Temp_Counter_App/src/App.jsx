import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-500 w-screen h-screen flex justify-center items-center">
      <div className="bg-red-500 w-96 h-56 p-5 rounded-2xl flex justify-center items-center flex-col gap-3">
        <div className="text-4xl text-white">{count}</div>
        <hr />
        <div className="flex justify-between w-full mt-5">
          <button
            className="text-white bg-purple-400 hover:bg-purple-500 text-2xl pt-2 pb-2 pl-6 pr-6 rounded-lg"
            onClick={() => {
              setCount((prev) => prev + 1);
            }}
          >
            increase
          </button>
          <button
            className="text-white bg-purple-400 hover:bg-purple-500 text-2xl pt-2 pb-2 pl-6 pr-6 rounded-lg"
            onClick={() => {
              setCount((prev) => (prev > 0 ? prev - 1 : prev));
            }}
          >
            descrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
