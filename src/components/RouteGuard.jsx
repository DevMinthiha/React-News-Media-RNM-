import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RouteGuard = ({ children }) => {
  const user = useSelector((state) => state.user.value);
  if (user) return children;
  else return <Navigate to="/login" />
};

export default RouteGuard;
