import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h2 className="text-3xl font-extrabold">
        R<span className="text-red-600 text-4xl">N</span>M
      </h2>
    </Link>
  );
};

export default Logo;
