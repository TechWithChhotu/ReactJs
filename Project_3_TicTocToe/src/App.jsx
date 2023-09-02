import { useState } from "react";
import "./App.css";
import Grid from "./components/grid/grid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="bg-gray-500">Hello Tic Toc Toe</h1> */}
      {/* <Card player="x" /> */}
      <Grid numberOfCards={9} />
    </>
  );
}

export default App;
