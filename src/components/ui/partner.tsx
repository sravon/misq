import Slider from "react-slick";
import MultipleRows from "./multiple-row";

export default function Partners() {
  return (
    <div className="bg-gray-200 py-24 sm:py-32 mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2 pb-10">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-base font-bold tracking-tight text-gray-600">We are the official merchandising partner of </h2>
          </div>
        </div>
        <MultipleRows/>
      </div>
    </div>
  )
}


