import { useState } from "react";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Conponents/Login/Login";
import Profile from "./Conponents/Profile/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1 className="bg-red-500">Hellooooo, i am provider</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
