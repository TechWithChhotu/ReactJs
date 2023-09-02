import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [symbolsAllowed, setsymbolsAllowed] = useState(false);

  const newPassword = useCallback(() => {
    let pass = "";
    let passRow = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) passRow += "0123456789";
    if (symbolsAllowed) passRow += "~!@#$%^&*/?,-";
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * (passRow.length - 1) + 1);
      pass += passRow[index];
      setPassword(pass);
    }
  }, [length, numbersAllowed, symbolsAllowed, setPassword]);

  useEffect(() => {
    newPassword();
  }, [length, numbersAllowed, symbolsAllowed, newPassword]);

  const passRef = useRef(null);
  const copyToClipboard = () => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(5, 7); //5 staring index and 7 ending index
    window.navigator.clipboard.writeText(password);
  };
  return (
    <>
      <div className="bg-gray-700 p-5 rounded-xl">
        <h1 className=" text-orange-400 text-3xl"> Password Generator</h1>

        <div className="flex h-9  mt-3 bg-green-400 rounded-lg">
          <input
            type="text"
            className="w-full bg-transparent outline-none h-full text-gray-800 text-lg p-2 "
            readOnly
            value={password}
            ref={passRef}
          />

          <button
            className="bg-blue-500 text-white h-9 pl-3 pr-3 rounded-lg hover:bg-blue-700"
            onClick={copyToClipboard}
          >
            copy
          </button>
        </div>

        <div className=" w-full flex gap-6 mt-5">
          <div className=" flex gap-1 ">
            <input
              type="range"
              className="cursor-pointer"
              min={8}
              max={25}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>length: {length}</label>
          </div>

          <div className=" flex gap-1 cursor-pointer">
            <input
              type="checkbox"
              id="NumbersCheckBox"
              onChange={() => {
                setNumbersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="NumbersCheckBox">Numbers</label>
          </div>

          <div className=" flex gap-1 cursor-pointer">
            <input
              type="checkbox"
              id="SymbolsCheckBox"
              onChange={() => {
                setsymbolsAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="SymbolsCheckBox">Symbols</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
