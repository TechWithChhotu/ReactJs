import { useState } from "react";
function App() {
  // ===========>>>>>>>>>>>USE STATE HOOK<<<<<<<<<=============
  const [couter, setCouter] = useState(10);

  const insreaseValue = () => {
    setCouter(couter + 1);
  };
  const decreaseValue = () => {
    setCouter(couter - 1);
  };
  return (
    <>
      <span>{couter}</span>

      <div className="Buttons">
        <button onClick={insreaseValue}>Increase</button>
        <button onClick={decreaseValue}>Decrease</button>
      </div>
    </>
  );
}

export default App;
