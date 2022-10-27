import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-end py-8">
      <div className="flex justify-center items-end">
        <Logo />
        {/* <div className="flex justify-center items-center gap-5 ml-10 font-semibold cursor-pointer">
            <p>Politics</p>
            <p>Business</p>
            <p>Health</p>
            <p>Sports</p>
        </div> */}
      </div>
      <div className="flex items-center gap-2">
        {/* <p>min thiha</p> */}
        <Link to="/login">
          <button className="px-3 rounded-xl border-black border-4 font-semibold">
            Log in
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
