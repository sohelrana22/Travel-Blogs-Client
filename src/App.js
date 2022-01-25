import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddBlog from "./Pages/AddBlog/AddBlog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import EditBlogs from "./Pages/Dashboard/EditBlogs/EditBlogs";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageBlogs from "./Pages/Dashboard/ManageBlogs/ManageBlogs";
import Home from "./Pages/HomePage/Home/Home";
import Login from "./Pages/Login/Login";
import ShowBlog from "./Pages/ShowBlog/ShowBlog";
import AdminRoute from "./PrivateRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/addblog"
          element={
            <PrivateRoute>
              <AddBlog />
            </PrivateRoute>
          }
        />
        <Route
          path="/viewblog/:id"
          element={
            <PrivateRoute>
              <ShowBlog />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        >
          <Route path="manageblogs" element={<ManageBlogs />} />
          <Route path="makeadmin" element={<MakeAdmin />} />
          <Route path="editblog/:id" element={<EditBlogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
