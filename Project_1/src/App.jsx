import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("#242424");

  return (
    <>
      <div
        className="h-screen w-screen  flex flex-auto"
        style={{ backgroundColor: color }}
      >
        <div className="w-full">
          <button
            className="bg-red-600 m-2"
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="bg-blue-600 m-2"
            onClick={() => {
              setColor("blue");
            }}
          >
            blue
          </button>
          <button
            className="bg-green-800 m-2"
            onClick={() => {
              setColor("green");
            }}
          >
            green
          </button>
          <button
            className="m-2 bg-yellow-300"
            onClick={() => {
              setColor("yellow");
            }}
          >
            yellow
          </button>
          <button
            className="bg-purple-500 m-2"
            onClick={() => {
              setColor("#8d19df");
            }}
          >
            purple
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
