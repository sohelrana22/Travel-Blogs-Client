import React from "react";
import {  Outlet } from "react-router-dom";

import AdminPanle from "./AdminPanel/AdminPanle";

const Dashboard = () => {
  return (
    <>
      <AdminPanle />
      <Outlet />
    </>
  );
};

export default Dashboard;
