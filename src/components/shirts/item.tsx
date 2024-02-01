import Image from 'next/image'
import React from 'react'

type Props = {imageSrc:string,imageAlt:string,color:string,price:string,name:string,availableColors:any}

const ProductItem = ({imageSrc,imageAlt,color,price,name,availableColors}:Props) => {
    return (
        <li className="inline-flex w-64 flex-col text-center lg:w-auto">
            <div className="group relative">
                <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                    <Image
                        width={600}
                        height={600}
                        src={imageSrc}
                        alt={imageAlt}
                        className="h-[400px] w-full object-cover object-center group-hover:opacity-75"
                    />
                    <div className="absolute bottom-1 p-2 bg-black text-white">5.0/15</div>
                </div>
                <div className="flex justify-between mt-2 px-2">
                    <p className=" text-gray-900 text-lg font-semibold">{price}</p>
                    <p className="mt-1 text-green-500">13.3k Sold</p>
                </div>
                <div className="mt-6">
                <p className="text-sm text-gray-500">{color}</p>
                <h3 className="mt-1 font-semibold text-gray-900">
                    <a href={"#"}>
                    <span className="absolute inset-0" />
                    {name}
                    </a>
                </h3>
                </div>
            </div>

            <h4 className="sr-only">Available colors</h4>
            <ul role="list" className="mt-auto flex items-center justify-center space-x-3 pt-6">
                {availableColors.map((color:{name:string,colorBg:string}) => (
                <li
                    key={color.name}
                    className="h-4 w-4 rounded-full border border-black border-opacity-10"
                    style={{ backgroundColor: color.colorBg }}
                >
                    <span className="sr-only">{color.name}</span>
                </li>
                ))}
            </ul>
            <button className="w-full bg-gray-900 hover:bg-gray-600 mt-2 px-2 py-3 rounded-lg text-white text-lg">Add to Cart</button>
        </li>
    )
}

export default ProductItem