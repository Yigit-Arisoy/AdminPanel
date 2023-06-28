import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext, useState } from "react";
import Loading from "./Loading";

function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, loginErrorMessage, handleLoginError, loading } =
    useContext(AuthContext);

  const handleSubmit = async () => {
    await handleLogin(username, password);
  };

  return (
    <div>
      <div className="bg-[ffffff]"></div>
    </div>
  );
}

export default LoginCard;
