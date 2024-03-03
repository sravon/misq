import Image from "next/image"

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
  
  export default function TestShirts({title}:{title:string}) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between sm:px-6 lg:px-0 pb-4">
            <h2 className="text-base md:text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
            <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative pb-4">
                <div className="w-full overflow-hidden rounded-lg aspect-h-3 aspect-w-2 group-hover:opacity-75 h-auto md:h-96">
                  <Image
                    width={800}
                    height={800}
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute text-xs bottom-36 p-2 bg-black text-white">5.0/15</div>
                </div>
                <div className="flex justify-between mt-2 px-2">
                    <p className=" text-gray-900 text-sm md:text-lg font-semibold">50$</p>
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
          </div>
  
          <div className="mt-6 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  