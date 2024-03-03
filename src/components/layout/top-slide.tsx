import React from "react";
import Slider from "react-slick";

function TopSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <h2 className="text-center p-2 text-white bg-red-700">This is seasonal offered1</h2>
        <h2 className="text-center p-2 text-white bg-red-700">This is seasonal offered3</h2>
        <h2 className="text-center p-2 text-white bg-red-700">This is seasonal offered4</h2>
        <h2 className="text-center p-2 text-white bg-red-700">This is seasonal offered5</h2>
        <h2 className="text-center p-2 text-white bg-red-700">This is seasonal offered6</h2>
        <h2 className="text-center p-2 text-white bg-red-700">This is seasonal offered7</h2>
      </Slider>
    </div>
  );
}

export default TopSlide;