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
  
  export default function TestShirtsSlider({title}:{title:string}) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between sm:px-6 lg:px-0 pb-4">
            <h2 className="text-base md:text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
            <a href="#" className=" text-sm px-3 py-2 text-gray-100 hover:text-gray-500 bg-black rounded-full sm:block">
              Show more
            </a>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
                {products.map((product) => (
                <div key={product.id} className="group relative pb-4 pr-2">
                    <div className="w-full overflow-hidden rounded-lg aspect-h-3 aspect-w-2 group-hover:opacity-75 h-auto md:h-96">
                    <Image
                        width={800}
                        height={800}
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute text-xs bottom-36 p-2 bg-black text-white">
                      <span className="text-yellow-500">*</span>(
                      <span className="">5.0/15</span>)
                    </div>
                    </div>
                    <div className="flex justify-between mt-2 px-2">
                        <p className=" text-gray-900 text-sm md:text-lg font-semibold">50$ <del className="text-[10px] font-normal">$70</del></p>
                        <p className=" text-green-500 text-sm md:text-lg">13.3k Sold</p>
                    </div>
                    <h3 className="mt-4 text-sm md:text-base text-center font-semibold text-gray-900">
                    <a href={product.href}>
                        <span className="absolute inset-0" />
                        {product.name}
                    </a>
                    </h3>
                    {/* <ul role="list" className="mt-auto flex items-center justify-center space-x-3 pt-6">
                    {["red","green","blue"].map((color:string) => (
                    <li
                        key={color}
                        className="h-4 w-4 rounded-full border border-black border-opacity-10"
                        style={{ backgroundColor: color }}
                    >
                        <span className="sr-only">{color}</span>
                    </li>
                    ))}
                </ul> */}
                <button className="w-full bg-gray-900 hover:bg-gray-600 mt-2 px-2 py-3 rounded-lg text-white text-sm md:text-lg">Add to Cart</button>
                </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    )
  }
  