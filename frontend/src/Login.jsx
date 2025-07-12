import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "./App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [curState, setCurState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();

    try {
      if (curState === "SignUp") {
        const responce = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (responce.data.success) {
          setToken(responce.data.token);
          toast.success(responce.data.message);
        } else {
          toast.error(responce.data.message);
        }
      } else {
        const responce = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (responce.data.success) {
          setToken(responce.data.token);
          toast.success(responce.data.message);
        } else {
          toast.error(responce.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={formHandler}
        className="w-full max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg space-y-6"
      >
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-800">{curState}</p>
        </div>
        {curState === "Login" ? null : (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
