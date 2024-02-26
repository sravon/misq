import React from 'react'

const Testomonial = () => {
    return (
        <div className="px-4 mt-4 space-y-3">
            <h2 className="text-base md:text-2xl font-bold tracking-tight text-gray-900">Customer testomony</h2>
            <div className=" rounded-lg grid grid-cols-2 gap-2">
                <div className="w-full max-w-screen-lg mx-auto">
                    <video className="w-full" controls>
                        <source src="test.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="w-full max-w-screen-lg mx-auto">
                    <video className="w-full" controls>
                        <source src="test.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Testomonial