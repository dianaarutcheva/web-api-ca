import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const SignUpPage = () => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);


  // Register a new user
  const register = async () => {
    const result = await context.register(userName, password);
    setRegistered(result);
  };


   // Redirect to login page if registration is successful
  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h2>SignUp page</h2>
      <input placeholder="user name" onChange={e => setUserName(e.target.value)} />
      <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
    </>
  );
};

export default SignUpPage;