import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../services/dataApi";
import { removeUser } from "../services/userSlice";
import Logo from "./Logo";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  const logout = () => {
    dispatch(removeUser(null));
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-end py-8">
      <div className="flex justify-center items-end">
        <Logo />
      </div>
      <div className="flex items-center gap-2">
        {user && (
          <Link to="/admin">
            <p>{user.name}</p>
          </Link>
        )}
        {user ? (
          <button
            onClick={logout}
            className="px-3 rounded-xl border-black border-4 font-semibold"
          >
            Log out
          </button>
        ) : (
          <Link to="/login">
            <button className="px-3 rounded-xl border-black border-4 font-semibold">
              Log in
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
