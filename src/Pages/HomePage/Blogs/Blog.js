import React from "react";
import { Link } from "react-router-dom";
import useravater from "../../../img/useravater.png";
const Blog = ({ blog }) => {
  return (
    <Link to={`/viewblog/${blog._id}`}>
      <div className="md:p-8 p-2 bg-white">
        <img
          className="rounded-lg w-full h-64"
          style={{ objectFit: "cover" }}
          alt=""
          src={blog.img}
        />

        <p className="text-indigo-500 font-semibold text-base mt-2">
          {blog.category}
        </p>
        <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
          {blog.title}
        </h1>
        <div className="flex items-center space-x-2 mt-2">
          <img
            className="w-10 h-10 object-cover object-center rounded-full"
            src={useravater}
            alt="random user"
          />
          <div>
            <p className="text-gray-900 font-semibold">{blog.name}</p>
            <p className="text-gray-500 font-semibold text-sm">{blog.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
