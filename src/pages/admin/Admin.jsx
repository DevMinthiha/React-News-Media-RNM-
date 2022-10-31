import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import CatNav from "./CatNav";

const Admin = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="container">
      <Navbar />
      <CatNav />
      <div className="my-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
