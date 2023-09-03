import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card />
    </div>
  );
}

export default App;
