import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Register = () => {
  return (
    <section className="w-full h-screen">
      <div className="flex justify-center items-center pt-36">
        <form className="login-form md:w-550">
        <Logo />
          <h3 className="text-xl font-bold">Create your RNM account</h3>
          <p className="text-sm">
            Already have an account?
            <Link to="/login">
              <span className="ml-2 cursor-pointer underline">Log in.</span>
            </Link>
          </p>
          <input
            className="outline-none w-full p-3 rounded"
            type="text"
            placeholder="Name"
          />
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
          <input
            className="outline-none w-full p-3 rounded"
            type="number"
            placeholder="Phone number"
          />
          <button
            className="bg-red-600 w-full py-3 rounded text-white font-bold"
            type="submit"
          >
            Create account
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
