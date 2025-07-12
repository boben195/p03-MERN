import React, { useState } from "react";

const Login = () => {
  const [curState, setCurState] = useState("Login");
  return (
    <div>
      <form>
        <div>
          <p>{curState}</p>
        </div>
        {curState === "Login" ? null : (
          <input type="text" placeholder="Name" required />
        )}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <div>
          <p>Forgot password</p>
          {curState === "Login" ? (
            <p onClick={() => setCurState("SignUp")}>Create account</p>
          ) : (
            <p onClick={() => setCurState("Login")}>Login here</p>
          )}
        </div>
        <button>{curState === "Login" ? "SignIn" : "SignUp"}</button>
      </form>
    </div>
  );
};

export default Login;
