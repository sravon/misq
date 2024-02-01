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
    },
    // More products...
  ]
  
  export default function Highlight() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                  <Image
                    width={800}
                    height={800}
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base text-center font-semibold text-gray-900">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
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
  