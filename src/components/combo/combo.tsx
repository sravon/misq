import Image from "next/image"

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
  
  export default function Combo() {
    return (
      <div className="bg-white py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {people.map((person,i) => (
              <li key={i}>
                <Image width={150} height={150} className="mx-auto h-24 w-24 rounded-3xl" src={person.imageUrl} alt="" />
                <h3 className="mt-3 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  