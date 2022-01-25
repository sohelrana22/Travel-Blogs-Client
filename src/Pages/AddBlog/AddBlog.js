import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ReactStars from "react-rating-stars-component";

import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddBlog = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm();
  const { admin } = useAuth();
  const navigate = useNavigate();

  const [facilities, setFacilities] = useState(null);
  const [overall, setOverall] = useState(null);
  const { user } = useAuth();
  const onSubmit = (data) => {
    const blogData = {
      ...data,
      name: user.displayName,
      email: user.email,
      facilities,
      overall,
      date: startDate.toDateString(),
      status: `${admin ? "approved" : "pending"}`,
    };
    axios
      .post("https://rocky-inlet-47708.herokuapp.com/newblog", blogData)
      .then((result) => {
        if (result.data.insertedId) {
          navigate("/");
        }
      });
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-indigo-50 min-h-screen md:px-20 pt-6">
          <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center my-2">
              <Link
                to="/"
                className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-orange-600  "
              >
                Go Home
              </Link>
            </div>
            <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">
              Your Travel Experiences
            </h1>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="text-lx font-serif">
                  Name:
                </label>
                <input
                  type="text"
                  placeholder="user name"
                  id="title"
                  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                  defaultValue={user.displayName}
                  required
                />
              </div>
              <div>
                <label htmlFor="title" className="text-lx font-serif">
                  Email:
                </label>
                <input
                  type="text"
                  placeholder="user-email"
                  id="title"
                  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                  defaultValue={user.email}
                  required
                />
              </div>
              <div>
                <label htmlFor="title" className="text-lx font-serif">
                  Title:
                </label>
                <input
                  type="text"
                  placeholder="title"
                  id="title"
                  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                  {...register("title")}
                  required
                />
              </div>
              <div>
                <label htmlFor="title" className="text-lx font-serif">
                  Cost:
                </label>
                <input
                  type="number"
                  placeholder="Expenses"
                  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                  {...register("cost")}
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="text-lx font-serif">
                  Thumbnail:
                </label>
                <input
                  type="text"
                  placeholder="Image Url "
                  id="name"
                  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                  {...register("img")}
                  required
                />
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="name" className="text-lx font-serif">
                  Transportation Facilities:
                </label>
                <span className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md">
                  <ReactStars
                    count={5}
                    onChange={(rating) => setFacilities(rating)}
                    size={24}
                    activeColor="#ffd700"
                  />
                </span>
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="name" className="text-lx font-serif">
                  Over-All:
                </label>
                <span className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md">
                  <ReactStars
                    count={5}
                    onChange={(rating) => setOverall(rating)}
                    size={24}
                    activeColor="#ffd700"
                  />
                </span>
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="name" className="text-lx font-serif">
                  Select Date:
                </label>
                <span className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </span>
              </div>
              <div>
                <label htmlFor="email" className="text-lx font-serif">
                  Category:
                </label>
                <input
                  type="text"
                  placeholder="Add Category"
                  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                  {...register("category")}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-lg font-serif"
                >
                  Description:
                </label>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="whrite Blogs Description Here"
                  className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
                  {...register("desc")}
                  required
                ></textarea>
              </div>

              <button
                className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-orange-600  "
                type="submit"
              >
                ADD Blogs
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
