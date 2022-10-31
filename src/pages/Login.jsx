import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Logo from "../components/Logo";
import { addUser } from "../services/userSlice";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const apiLogin = async (user) => {
    const response = await fetch("http://13.214.58.126:3001/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    });
    const resData = await response.json();
    if (resData.con) {
      setIsLoading(false);
      if (isChecked) {
        localStorage.setItem("login", JSON.stringify({ phone, password }));
      } else {
        localStorage.removeItem("login");
      }
      navigate("/admin");
      dispatch(addUser(resData.result));
    } else {
      setIsLoading(false);
      setError(resData.msg);
      console.log(resData.msg);
    }
  };
  const loginHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let user = { phone, password };
    apiLogin(user);
  };

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("login"));
    if (localData) {
      setIsChecked(true);
      setPhone(localData?.phone);
      setPassword(localData?.password);
    }
  }, []);

  return (
    <section className="w-full h-screen">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center h-full">
        <form onSubmit={loginHandler} className="login-form md:w-550">
          <Logo />
          <h3 className="text-xl font-bold">Log in to your RNM account</h3>
          <p className="text-sm">
            Don't have an account?
            <Link to="/register">
              <span className="ml-2 cursor-pointer underline">Sign up.</span>
            </Link>
          </p>
          {error && <p className="text-xs text-red-500">{error}</p>}
          <input
            className="outline-none w-full p-3 rounded"
            type="phone"
            placeholder="Phone number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="outline-none w-full p-3 rounded"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-center gap-2 mr-auto">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(!isChecked)}
            />
            <p className="text-sm font-light">Remember Me</p>
          </div>
          <button
            className="bg-red-600 w-full py-3 rounded text-white font-bold"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
