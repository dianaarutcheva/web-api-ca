import React, { useContext, useState } from "react";
import { Navigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const LoginPage = () => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let location = useLocation();

  const login = () => {
    context.authenticate(userName, password);
  };

  const { from } = location.state
    ? { from: location.state.from.pathname }
    : { from: "/" };

  if (context.isAuthenticated === true) {
    return <Navigate to={from} />;
  }

  return (
    <>
      <h2>Login page</h2>
      <input placeholder="user name" onChange={e => setUserName(e.target.value)} />
      <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Log in</button>
      <p>Not registered? <Link to="/signup">Sign Up</Link></p>
    </>
  );
};

export default LoginPage;