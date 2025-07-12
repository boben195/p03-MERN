import React, { useState } from "react";

const Login = () => {
  const [curState, setCurState] = useState("Login");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-full max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-800">{curState}</p>
        </div>
        {curState === "Login" ? null : (
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-between text-sm text-blue-600">
          <p className="cursor-pointer hover:underline">Forgot password</p>
          {curState === "Login" ? (
            <p
              onClick={() => setCurState("SignUp")}
              className="cursor-pointer hover:underline"
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurState("Login")}
              className="cursor-pointer hover:underline"
            >
              Login here
            </p>
          )}
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300">
          {curState === "Login" ? "SignIn" : "SignUp"}
        </button>
      </form>
    </div>
  );
};

export default Login;
