import axios from "axios";
import React, { useEffect,useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";

const ShowBlog = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://rocky-inlet-47708.herokuapp.com/getblog/${id}`)
      .then((result) => {
        setData(result.data);
      });
  }, [id]);
  return (
    <div>
      <Navbar />
      <main className="relative container mx-auto bg-white px-4">
        <div className="relative -mx-4 top-0 pt-[17%] overflow-hidden">
          <img
            className="absolute inset-0 object-cover object-top w-full h-full filter blur"
            src={data.img}
            alt=""
          />
        </div>

        <div className="mt-[-10%] w-full md:w-2/3 lg:w-1/2 mx-auto">
          <div className="relative pt-[56.25%] overflow-hidden rounded-2xl">
            <img
              className="w-full h-full absolute inset-0 object-cover"
              src={data.img}
              alt=""
            />
          </div>
        </div>

        <article className="max-w-prose mx-auto py-8">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <h2 className="mt-2 text-sm text-gray-500">
            {data.name}, {data.date}
          </h2>
          <div className="flex gap-2 flex-wrap">
            <div className="flex items-center my-1">
              <span className="text-md">Facilities</span>
              <div className="flex items-center">
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  value={3}
                  edit={false}
                />
              </div>
            </div>
            <div className="flex items-center my-1">
              <span className="text-md">Over-All</span>
              <div className="flex items-center ml-2">
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  value={4}
                  edit={false}
                />
              </div>
            </div>
          </div>

          <p className="mt-6">{data.desc}</p>
        </article>
      </main>
    </div>
  );
};

export default ShowBlog;
