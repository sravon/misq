"use client"
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const people = [
    {
      name: 'Michael Foster1',
      imageUrl:"/d1.jpg"
    },
    {
      name: 'Michael Foster2',
      imageUrl:"/d2.jpg",
    },
    {
      name: 'Michael Foster3',
      imageUrl:"/d3.jpg",
    },
    {
      name: 'Michael Foster1',
      imageUrl:"/d4.jpg",
    },
    {
      name: 'Michael Foster2',
      imageUrl:"/d5.jpg",
    },
    {
      name: 'Michael Foster3',
      imageUrl:"/d6.jpg",
    },
    {
      name: 'Michael Foster1',
      imageUrl:"/d7.jpg",
    },
    {
      name: 'Michael Foster2',
      imageUrl:"/d8.jpg",
    },
    {
      name: 'Michael Foster3',
      imageUrl:"/d9.jpg",
    },
    {
      name: 'Michael Foster2',
      imageUrl:"/d3.jpg",
    },
    {
      name: 'Michael Foster3',
      imageUrl:"/d2.jpg",
    },
    {
      name: 'Michael Foster3',
      imageUrl:"/d1.jpg",
    },
  ]

function ComboTest() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  };
    return (
        <div className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="slider-container">
                    <Slider {...settings}>
                        {people.map((person,i) => (
                            <div key={i} className="">
                              <div className="border rounded-md p-1 mr-2">
                                <Image width={150} height={150} className="mx-auto h-16 w-16 md:h-24 md:w-24 rounded-3xl" src={person.imageUrl} alt="" />
                                <h3 className="mt-3 text-xs sm:text-base text-center font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                              </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ComboTest;
