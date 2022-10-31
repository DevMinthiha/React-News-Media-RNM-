import React from "react";
import { NavLink } from "react-router-dom";

const CatNav = () => {
  return (
    <div className="flex items-center gap-5">
      <NavLink to="/admin/cats/all">
        <button className="btn">categories</button>
      </NavLink>
      <NavLink to="/admin/tags/all">
        <button className="btn">tags</button>
      </NavLink>
      <NavLink to="/admin/posts/all">
        <button className="btn">posts</button>
      </NavLink>
    </div>
  );
};

export default CatNav;
