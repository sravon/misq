import Image from "next/image";

export default function TopSell() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-base md:text-2xl font-bold tracking-tight text-gray-900">
            Top sell
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 bg-slate-500">
            <Image
              width={800}
              height={800}
              src="/t5.jpg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-cover object-center group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="p-6">
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-xl text-white">
                      This is title
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-lg text-white">
                      $120
                    </p>
                  </div>
                  <button className="bg-gray-900 hover:bg-gray-600 mt-2 px-3 py-3 rounded-lg text-white text-lg">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modile items */}
          <div className="flex sm:hidden w-full gap-3">
            <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg">
              <Image
                width={800}
                height={800}
                src="/t5.jpg"
                alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              />
              <div className="flex justify-between mt-2 px-2">
                <p className=" text-gray-900 text-sm md:text-lg font-semibold">50$</p>
                <p className=" text-green-500 text-sm md:text-lg">13.3k Sold</p>
              </div>
              <h3 className="mt-4 text-sm md:text-base text-center font-semibold text-gray-900">
                  <a href={"#"}>
                    <span className="absolute inset-0" />
                    product name
                  </a>
                </h3>
                <button className="w-full bg-gray-900 hover:bg-gray-600 mt-2 px-2 py-3 rounded-lg text-white text-sm md:text-lg">Add to Cart</button>
            </div>
            <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg">
              <Image
                width={800}
                height={800}
                src="/t2.jpg"
                alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              />
              <div className="flex justify-between mt-2 px-2">
                <p className=" text-gray-900 text-sm md:text-lg font-semibold">50$</p>
                <p className=" text-green-500 text-sm md:text-lg">13.3k Sold</p>
              </div>
              <h3 className="mt-4 text-sm md:text-base text-center font-semibold text-gray-900">
                  <a href={"#"}>
                    <span className="absolute inset-0" />
                    product name
                  </a>
                </h3>
                <button className="w-full bg-gray-900 hover:bg-gray-600 mt-2 px-2 py-3 rounded-lg text-white text-sm md:text-lg">Add to Cart</button>
            </div>
          </div>

          {/* Desktop item */}
          <div className="hidden sm:block group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <Image
              width={200}
              height={200}
              src="/t2.jpg"
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="font-semibold text-xl text-white">
                    This is title
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-lg text-white">
                    $120
                  </p>
                </div>
                <button className="bg-gray-900 hover:bg-gray-600 mt-2 px-3 py-3 rounded-lg text-white text-lg">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          {/* Desktop item */}
          <div className="hidden sm:block group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <Image
              width={800}
              height={800}
              src="/t5.jpg"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="font-semibold text-xl text-white">
                    This is title
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-lg text-white">
                    $120
                  </p>
                </div>
                <button className="bg-gray-900 hover:bg-gray-600 mt-2 px-3 py-3 rounded-lg text-white text-lg">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
