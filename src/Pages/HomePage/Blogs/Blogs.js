import axios from "axios";
import React, { useEffect, useState } from "react";

import Blog from "./Blog";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://rocky-inlet-47708.herokuapp.com/gethomeblogs?page=${currentPage}`
      )
      .then((result) => {
        setBlogsData(result.data.allblogs);
        setLoading(false);
        const pageNumber = Math.ceil(result.data.blogsCount / 10);
        setPageCount(pageNumber);
      });
  }, [currentPage]);
  if (loading) {
    return (
      <div className="container mx-auto h-full w-full flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {blogsData.map((blogItem) => (
          <Blog key={blogItem._id} blog={blogItem} />
        ))}
      </div>
      <div className="my-2 flex items-center justify-center">
        <ul className="flex pl-0 list-none rounded my-2">
          {[...Array(pageCount).keys()].map((number) => (
            <li
              className={`relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200 ${
                currentPage === number ? "bg-gray-300 shadow font-bold" : ""
              }`}
              key={number}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
