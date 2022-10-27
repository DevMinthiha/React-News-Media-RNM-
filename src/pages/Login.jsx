import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Login = () => {
  return (
    <section className="w-full h-screen">
      <div className="flex justify-center items-center pt-36">
        <form className="login-form md:w-550">
          <Logo />
          <h3 className="text-xl font-bold">Log in to your RNM account</h3>
          <p className="text-sm">
            Don't have an account?
            <Link to="/register">
              <span className="ml-2 cursor-pointer underline">Sign up.</span>
            </Link>
          </p>
          <input
            className="outline-none w-full p-3 rounded"
            type="text"
            placeholder="Email address"
          />
          <input
            className="outline-none w-full p-3 rounded"
            type="password"
            placeholder="Password"
          />
          <div className="flex items-center justify-center gap-2 mr-auto">
            <input type="checkbox" />
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
