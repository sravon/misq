import { ChartPieIcon, TruckIcon } from '@heroicons/react/20/solid'
import { BanknotesIcon } from '@heroicons/react/24/solid'
import React from 'react'

function PayAndDelivery() {
    return (
    <div className="max-w-7xl px-4 my-20">
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0
          md:space-x-12">
          <div className="flex flex-col items-center space-y-5">
            <BanknotesIcon className="w-10 h-10" />
            <h5>All secure payment methods</h5>
            <img src="https://fabrilife.com/img/sslcommerz.png" />
          </div>
          <div className="flex flex-col items-center space-y-5">
            <ChartPieIcon className="w-10 h-10" />
            <h5>Satisfaction guaranteed</h5>
            <p className="max-w-md text-gray-600">
            Made with premium quality materials.Cozy yet lasts the test of time
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <TruckIcon className="w-10 h-10 mb-6" />
            <h5>Worldwide delivery</h5>
            <img src="https://fabrilife.com/img/delivery.png" />
          </div>
        </div>
    </div>
    )
}

export default PayAndDelivery