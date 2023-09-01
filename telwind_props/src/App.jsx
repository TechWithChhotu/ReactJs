import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";
function App() {
  const [count, setCount] = useState(0);
  const profileIcon =
    "https://th.bing.com/th/id/OIG.NITd12bFrBFjVlSMFO1_?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn";
  return (
    <>
      <Card profileIcon={profileIcon} title="WEB DEV" name="CKumar" />
    </>
  );
}

export default App;
