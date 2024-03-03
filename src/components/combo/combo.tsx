import Image from "next/image"

const people = [
    {
      name: 'Michael 12',
      imageUrl:"/d1.jpg"
    },
    {
      name: 'Michael 2',
      imageUrl:"/d2.jpg",
    },
    {
      name: 'Michael 3',
      imageUrl:"/d3.jpg",
    },
    {
      name: 'Michael 1',
      imageUrl:"/d4.jpg",
    },
    {
      name: 'Michael2',
      imageUrl:"/d5.jpg",
    },
    {
      name: 'Michael3',
      imageUrl:"/d6.jpg",
    },
    {
      name: 'Michael3',
      imageUrl:"/d6.jpg",
    },
    {
      name: 'Michael3',
      imageUrl:"/d4.jpg",
    },
  ]
  
  export default function Combo() {
    return (
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {people.map((person,i) => (
              <li key={i}>
                <Image width={150} height={150} className="mx-auto w-16 h-16 sm:h-24 sm:w-24 rounded-3xl" src={person.imageUrl} alt="" />
                <h3 className="mt-3 text-xs font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  