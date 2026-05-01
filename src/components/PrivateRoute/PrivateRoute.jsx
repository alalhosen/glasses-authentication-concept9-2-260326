import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to='/login' state={}/>
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
