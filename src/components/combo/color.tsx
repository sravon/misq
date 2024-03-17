"use client"
import Slider from "react-slick"

  export default function Color() {
    const colors = [
      { id:1,name:'green', colorCode:"bg-[#66cf14]"},
      { id:2,name:'red', colorCode:"bg-[#cf3514]"},
      { id:3,name:'black', colorCode:"bg-[#0d0e0d]"},
      { id:4,name:'pink', colorCode:"bg-[#e852ed]"},
      { id:5,name:'blue', colorCode:"bg-[#52b7ed]"}
    ]

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    return (
      <div className="bg-white py-4">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-base md:text-2xl font-bold tracking-tight text-gray-900 pb-4">Shop by color</h2>
          <div className="slider-container">
            <Slider {...settings}>
              {colors.map((color) => (
                <div key={color.id}>
                  <div className={`mx-auto w-12 h-12 md:h-24 md:w-24 rounded-full ${color.colorCode}`} />
                  <h3 className="mt-3 text-xs md:text-base text-center capitalize font-semibold leading-7 tracking-tight text-gray-900">{color.name}</h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    )
  }
  