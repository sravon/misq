'use client'
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function SimpleSlider({slides}:{slides: string[];}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="min-w-full h-auto overflow-hidden">
      <Slider {...settings}>
          {slides.map((slide,i:number) => (<div key={i}>
            <Image
              alt="Mountains"
              src={slide}
              width={1200}
              height={200}
              style={{
                width: "100%",
                height: "400px"
              }}
            />
          </div>))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
