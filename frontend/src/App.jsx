import React, { useState } from "react";
import Login from "./Login";
import { ToastContainer } from "react-toastify";

export const backendUrl = "http://localhost:4000";

const App = () => {
  const [token, setToken] = useState("");
  return (
    <div>
      <ToastContainer />
      <Login setToken={setToken} />
    </div>
  );
};

export default App;
