"use client"
import { useState, useEffect } from "react"
import {
  Bars3Icon,
  BellIcon,
} from '@heroicons/react/24/outline'
import Image from "next/image"

const slides = [
  <Image
    alt="Mountains"
    src={"/bg.png"}
    width={1200}
    height={200}
    style={{
      width: "100%",
      height:"400px"
    }}
  />,
]

export default function Slider({
  sliders,
  autoSlide = false,
  autoSlideInterval = 3000,
}:{
  sliders?: any;
  autoSlide?: boolean;
  autoSlideInterval?: number,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <Bars3Icon className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <Bars3Icon className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}