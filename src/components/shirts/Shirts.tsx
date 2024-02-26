import Image from "next/image"
import ProductItem from "./item"

const products = [
    {
      id: 1,
      name: 'Machined Pen',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: '/t1.jpg',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      availableColors: [
        { name: 'Black', colorBg: '#111827' },
        { name: 'Brass', colorBg: '#FDE68A' },
        { name: 'Chrome', colorBg: '#E5E7EB' },
      ],
    },
    {
      id: 2,
      name: 'Machined Pen',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: '/t6.jpeg',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      availableColors: [
        { name: 'Black', colorBg: '#111827' },
        { name: 'Brass', colorBg: '#FDE68A' },
        { name: 'Chrome', colorBg: '#E5E7EB' },
      ],
    },
    {
      id: 3,
      name: 'Machined Pen',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: '/t5.jpg',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      availableColors: [
        { name: 'Black', colorBg: '#111827' },
        { name: 'Brass', colorBg: '#FDE68A' },
        { name: 'Chrome', colorBg: '#E5E7EB' },
      ],
    },
    {
      id: 4,
      name: 'Machined Pen',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: '/t2.jpg',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      availableColors: [
        { name: 'Black', colorBg: '#111827' },
        { name: 'Brass', colorBg: '#FDE68A' },
        { name: 'Chrome', colorBg: '#E5E7EB' },
      ],
    },
    // More products...
  ]
  
  export default function Shirts({title}:{title:string}) {
    return (
      <div className="bg-white w-full">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
            <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
  
          <div className="relative mt-8">
            <div className="relative w-full pb-6">
              <ul
                role="list"
                className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8"
              >
                {products.map((product) => (
                  <ProductItem
                    key={product.id}
                    imageSrc={product.imageSrc}
                    imageAlt={product.imageAlt}
                    color={product.color}
                    price={product.price}
                    name={product.name}
                    availableColors={product.availableColors}
                  />
                ))}
              </ul>
            </div>
          </div>
  
          <div className="mt-12 flex px-4 sm:hidden">
            <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  