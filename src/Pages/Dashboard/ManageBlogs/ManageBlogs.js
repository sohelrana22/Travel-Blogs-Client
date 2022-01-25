import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBlogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [render, setRender] = useState(false);
  const blogApproveHandler = (id) => {
    axios
      .put(`https://rocky-inlet-47708.herokuapp.com/approveblog/${id}`)
      .then((result) => {
        if (result.data.acknowledged) {
          setRender(!render);
        }
      });
  };
  const blogDeleteHandler = (id) => {
    axios
      .delete(`https://rocky-inlet-47708.herokuapp.com/blogdelete/${id}`)
      .then((result) => {
        if (result.data.acknowledged) {
          setRender(!render);
        }
      });
  };
  useEffect(() => {
    axios
      .get("https://rocky-inlet-47708.herokuapp.com/getblogs")
      .then((result) => {
        setBlogsData(result.data);
      });
  }, [render]);
  return (
    <div className="container mx-auto bg-[#F3F4F6]">
      <section className="pt-2 lg:pt-[10px] pb-2 lg:pb-2 ">
        <div className="flex flex-wrap -mx-4">
          {blogsData.map((blog) => (
            <div className="w-full md:w-1/2 xl:w-1/3 px-4" key={blog._id}>
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img
                  src={blog.img}
                  alt=""
                  className="w-full h-64 object-cover"
                />
                <div className="p-2 md:p-5 xl:p-4 text-center">
                  {blog.status === "pending" ? (
                    <p className="text-center text-red-700">{blog.status}</p>
                  ) : (
                    <p className="text-center text-green-700">{blog.status}</p>
                  )}

                  <h3>
                    <p
                      className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      {blog.title}
                    </p>
                  </h3>
                  <div className="flex items-center justify-center gap-3">
                    <Link to={`/dashboard/editblog/${blog._id}`} className="px-4 py-2 font-bold text-white bg-yellow-500">Edit</Link>
                    {blog.status === "pending" ? (
                      <button
                        className="px-4 py-2 bg-green-700 text-white font-bold"
                        onClick={() => blogApproveHandler(blog._id)}
                      >
                        Approve
                      </button>
                    ) : (
                      <button
                        className="px-4 py-2 bg-gray-200 text-gray-600 font-bold"
                        disabled
                      >
                        Approved
                      </button>
                    )}
                    <button
                      className="px-4 py-2 bg-red-700 text-white font-bold"
                      onClick={(id) => blogDeleteHandler(blog._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ManageBlogs;
