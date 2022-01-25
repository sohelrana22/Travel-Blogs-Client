import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="container mx-auto h-full w-full flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
