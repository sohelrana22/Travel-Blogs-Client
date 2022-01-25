import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fakedata from "./fakedata";
const Header = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
}
  return (
    <div>
      <div className="container mx-auto">
        <Slider {...settings}>
          {fakedata.map((data) => (
            <div key={data.id}>
              <div
                className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-32 bg-cover h-96 lg:h-1/2"
                style={{
                  backgroundImage: `url(${data.img})`,
                  backgroundPosition: "center",
                }}
              >
                <div className="text-center flex flex-col gap-5 items-center">
                  <h1 className="text-2xl md:text-4xl font-semibold text-white uppercase lg:text-3xl">
                    {data.name}
                  </h1>
                  <p className="text-white text-md w-full md:w-2/3 lg:w-1/2">
                    {data.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Header;
