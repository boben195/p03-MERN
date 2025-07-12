import React, { useState } from "react";
import Login from "./Login";
import { ToastContainer } from "react-toastify";
import Home from "./Home";

export const backendUrl = "http://localhost:4000";

const App = () => {
  const [token, setToken] = useState("");
  return (
    <div>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <Home setToken={setToken} />
      )}
    </div>
  );
};

export default App;
