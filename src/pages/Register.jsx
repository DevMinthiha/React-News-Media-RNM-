import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const apiRegister = async (user) => {
    const response = await fetch("http://13.214.58.126:3001/users/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    });
    const resData = await response.json();
    if (resData.con) {
      navigate("/login");
    } else {
      setError(resData.msg);
      console.log(resData.msg);
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();
    let user = { name, email, phone, password };
    apiRegister(user);
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  return (
    <section className="w-full h-screen">
      <div className="flex justify-center items-center h-full">
        <form onSubmit={registerHandler} className="login-form md:w-550">
          <Logo />
          <h3 className="text-xl font-bold">Create your RNM account</h3>
          <p className="text-sm">
            Already have an account?
            <Link to="/login">
              <span className="ml-2 cursor-pointer underline">Log in.</span>
            </Link>
          </p>
          {error && <p className="text-xs text-red-500">{error}</p>}
          <input
            className="outline-none w-full p-3 rounded"
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="outline-none w-full p-3 rounded"
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="outline-none w-full p-3 rounded"
            type="number"
            required
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="outline-none w-full p-3 rounded"
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
