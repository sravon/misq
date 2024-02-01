import clsx from "clsx"

  export default function Color() {
    const colors = [
      { name:'green', colorCode:"bg-[#66cf14]"},
      { name:'red', colorCode:"bg-[#cf3514]"},
      { name:'black', colorCode:"bg-[#0d0e0d]"},
      { name:'pink', colorCode:"bg-[#e852ed]"},
      { name:'blue', colorCode:"bg-[#52b7ed]"},
      { name:'yellow', colorCode:"bg-[#f1f12d]"}
    ]
    return (
      <div className="bg-white py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {colors.map((color,i) => (
              <li key={i}>
                <div className={`mx-auto h-24 w-24 rounded-full ${color.colorCode}`} />
                <h3 className="mt-3 text-base capitalize font-semibold leading-7 tracking-tight text-gray-900">{color.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  