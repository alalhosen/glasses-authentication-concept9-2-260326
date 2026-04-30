import React from "react";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <h1>loading</h1>;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
