import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import GeneralContext from "../context/GeneralContext";

function Login() {
  const navigate = useNavigate();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { isLogged, setIsLogged } = useContext(GeneralContext);

  useEffect(() => {
    if (isLogged) navigate("/");
  }, []);

  const handleLogin = () => {
    if (mail != null && password != null) {
      if (error) setError(null);
      setIsLogged(true);
      navigate("/");
    } else {
      setError("Enter your Email and Password");
    }
  };

  return (
    <div className="gradientBg h-screen ">
      <div className="flex justify-center">
        <div className="bg-[#ffffff] rounded-3xl px-8 mt-48">
          <div className="border-l-4 border-bgOrange mx-16">
            <div className=" font-bold mx-4 text-4xl mt-8">MANAGE COURSES</div>
          </div>

          <div className="text-textBlack font-semibold text-xl mt-8">
            SIGN IN
          </div>
          <div className="text-sm text-textGray mt-2 mx-4">
            Enter your credentials to access your account
          </div>

          <div className="text-left">
            <div className="text-textGray font-semibold mt-8 mb-1">Email</div>
            <input
              type="text"
              className="rounded-md border-[1px] border-textLightGray w-full px-4 py-2 mt-1 text-textBlack"
              placeholder="Enter your email"
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />

            <div className="text-textGray font-semibold mt-6 mb-1">
              Password
            </div>
            <input
              type="password"
              className="rounded-md border-[1px] border-textLightGray w-full px-4 py-2 mt-1 text-textBlack"
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {error && <div className="text-[#ff5555]">{error}</div>}

            <button
              className="bg-bgOrange mt-6 rounded-md px-2 text-bgWhite w-full py-3 "
              onClick={handleLogin}
            >
              SIGN IN
            </button>
          </div>

          <div className="text-textGray mt-4 mb-8">
            Forgot your password?{" "}
            <button className="text-bgOrange underline">Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
