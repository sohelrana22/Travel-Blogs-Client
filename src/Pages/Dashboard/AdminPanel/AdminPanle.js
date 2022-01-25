import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AdminPanle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {/* <!-- navbar goes here --> */}
      <nav className="bg-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* <!-- logo --> */}
              <div>
                <NavLink
                  to="/"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <span className="font-bold">Admin Panel</span>
                </NavLink>
              </div>
              {/* <!-- primary nav --> */}
              <div className="hidden md:flex items-center space-x-1">
                <NavLink
                  to="/dashboard/manageblogs"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Manage Blogs
                </NavLink>
                <NavLink
                  to="/dashboard/makeadmin"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Make Admin
                </NavLink>
                <NavLink
                  to="/addblog"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  New Blogs
                </NavLink>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="mobile-menu-button"
                onClick={() => setToggle(!toggle)}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`mobile-menu  ${
            toggle ? "hidden" : " "
          } md:hidden mx-4 flex flex-col items-center`}
        >
          <NavLink
            to="/dashboard/manageblogs"
            className="block py-2 px-3 text-gray-700 hover:text-gray-900"
          >
            Manage Blogs
          </NavLink>
          <NavLink
            to="/dashboard/makeadmin"
            className="block py-2 px-3 text-gray-700 hover:text-gray-900"
          >
            Make Admin
          </NavLink>
          <NavLink
            to="/addblog"
            className="block py-2 px-3 text-gray-700 hover:text-gray-900"
          >
            New Blogs
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default AdminPanle;
