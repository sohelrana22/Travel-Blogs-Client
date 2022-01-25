import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading, admin } = useAuth();
  if (loading) {
    return <div className="loader"></div>;
  }
  return user && admin ? children : <Navigate to="/" />;
};

export default AdminRoute;
