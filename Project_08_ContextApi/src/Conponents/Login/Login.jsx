import React, { useState, useContext } from "react";
import UserContext from "../../Context/UserContact";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    !user && (
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>login</button>
      </div>
    )
  );
}

export default Login;
