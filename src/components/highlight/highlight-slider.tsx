"use client"
import Image from "next/image"
import Slider from "react-slick";

const products = [
    {
      id: 1,
      name: 'Black Basic Tee 1',
      href: '#',
      imageSrc: '/t1.jpg',
      imageAlt: "Model wearing women's black cotton crewneck tee.",
    },
    {
      id: 2,
      name: 'Red Basic Tee',
      href: '#',
      imageSrc: '/t2.jpg',
      imageAlt: "Model wearing women's black cotton crewneck tee.",
    },
    {
      id: 3,
      name: 'White Tee',
      href: '#',
      imageSrc: '/t3.jpg',
      imageAlt: "Model wearing women's black cotton crewneck tee.",
    },{
      id: 4,
      name: 'White Tee',
      href: '#',
      imageSrc: '/t1.jpg',
      imageAlt: "Model wearing women's black cotton crewneck tee.",
    },
  ]
  
  export default function HighlightSlider() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-base md:text-2xl font-bold tracking-tight text-gray-900 pb-4">Shop by Category</h2>
          <div className="slider-container">
            <Slider {...settings}>
              {products.map((product) => (
                <div key={product.id} className="group relative pr-2">
                  <div className="w-full overflow-hidden rounded-lg aspect-h-3 aspect-w-2 group-hover:opacity-75 h-auto md:h-96">
                    <Image
                      width={800}
                      height={800}
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-xs sm:text-base text-center font-semibold text-gray-900">
                    <a href={product.href}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    )
  }
  