import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const redirectUrl = location.pathname?.state || "/";
  const navigate = useNavigate();
  const { registerUser, LoginUser, googleLogin, authError } = useAuth();
  const onSubmit = (data) => {
    if (isNewUser) {
      registerUser(data.email, data.password, data.name, navigate, redirectUrl);
    } else {
      LoginUser(data.email, data.password, navigate, redirectUrl);
    }
  };
  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <div className="flex mt-7 justify-center w-full">
              <Link
                to="/"
                className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
              >
                Go Home
              </Link>
            </div>
            <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
              {isNewUser ? "Register" : "Login"}
            </label>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
              <div>
                {isNewUser && (
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    {...register("name")}
                    required
                  />
                )}
              </div>
              <div className="mt-7">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  {...register("email")}
                  required
                />
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  {...register("password")}
                  minLength={6}
                  required
                />
              </div>

              <div className="mt-7">
                {isNewUser ? (
                  <button
                    type="submit"
                    className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Login
                  </button>
                )}
              </div>

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Or,Login With
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="flex mt-7 justify-center w-full">
                <button
                  onClick={() => googleLogin(navigate, redirectUrl)}
                  className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Google
                </button>
              </div>

              <div className="mt-7">
                {isNewUser ? (
                  <div className="flex justify-center items-center">
                    <label className="mr-2">Existing User ?</label>
                    <button
                      className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                      onClick={() => setIsNewUser(false)}
                    >
                      Login Here
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    <label className="mr-2">New User ?</label>
                    <button
                      className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                      onClick={() => setIsNewUser(true)}
                    >
                      Register Here
                    </button>
                  </div>
                )}
                <div className="flex justify-center items-center">
                  {authError && (
                    <p className="text-center text-red-700 font-bold">
                      {authError}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
