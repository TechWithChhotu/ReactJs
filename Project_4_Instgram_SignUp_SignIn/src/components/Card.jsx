import React, { useState } from "react";

function Card() {
  const [state, setState] = useState(true); //true ==> sign in | false ==> sign up
  // we can also use as const [state,setState]=useState("signin")
  return (
    <div className="w-72 h-96 border-2 border-gray-800 rounded-lg">
      <h2
        className="text-6xl text-center mt-7 mb-7"
        style={{ fontFamily: "Norican" }}
      >
        Instagram
      </h2>

      <div className="inputes  w-64 ml-3.5">
        {!state && (
          <input
            type="text"
            placeholder="Full name"
            className="w-full outline-none border border-gray-700 rounded-md mt-2 h-8 pl-2 pr-2"
          />
        )}
        <input
          type="text"
          placeholder="username, phone no. or email"
          className="w-full outline-none border border-gray-700 rounded-md mt-2 h-8 pl-2 pr-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full outline-none border border-gray-700 rounded-md mt-2 h-8 pl-2 pr-2"
        />
      </div>

      <button className="h-8 w-64 ml-3.5 mt-8 bg-blue-400 text-white text-xl rounded-md hover:bg-blue-500">
        {(state && "Sign in") || "Sign up"}
      </button>
      <p className="mt-4 text-center">
        don`t have account?{" "}
        <span
          className="text-blue-500 cursor-pointer hover:text-blue-400"
          onClick={() => setState(!state)}
        >
          {(state && "Sign in") || "Sign up"}
        </span>
      </p>
    </div>
  );
}

export default Card;
