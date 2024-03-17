import React from 'react'

const Testomonial = () => {
    return (
        <div className="px-4 mt-4 space-y-3">
            <h2 className="text-base text-center md:text-2xl font-bold tracking-tight text-gray-900">Customer testomony</h2>
            <h2 className="text-sm text-center md:text-xl text-gray-600 pb-2">Serving over 2000 daily</h2>
            <div className=" rounded-lg grid grid-cols-2 gap-2">
                <div className="w-full max-w-screen-lg mx-auto">
                    <video className="w-full" controls poster="/images/banner1.jpg">
                        <source src="test.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="w-full max-w-screen-lg mx-auto">
                    <video className="w-full" controls poster="/images/banner1.jpg">
                        <source src="test.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Testomonial