const people = [
    { size: 'M', chest: '39', length: '27.5', sleeve: 8.5 },
    { size: 'L', chest: '40.5', length: '28', sleeve: 8.75 },
    { size: 'XL', chest: '43', length: '229', sleeve: 9 },
    { size: 'XXl', chest: '45', length: '30', sleeve: 9.25 },
  ]
  
  export default function Table() {
    return (
      <div className="pb-3 mt-3">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-extrabold leading-6 text-gray-900">Size chart - In inches (Expected Deviation 3%)</h1>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Size
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Chest(Round)
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Length
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                      Sleeve
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person,i) => (
                    <tr key={i} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                        {person.size}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.chest}</td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.length}</td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">{person.sleeve}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  