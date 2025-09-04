import React from 'react'
import poster from "../../assets/en-poster.webp";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdOutlineSecurityUpdateGood, MdOutlineVerifiedUser  } from "react-icons/md";





const WhyUkilLagbe = () => {
  return (
    <div>
      <div className=''>
            <div className='text-center'>
              <h2 className="text-4xl font-bold mb-5">Why you take our service</h2>
              <p className='text-lg mb-5'>our service is best</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <img className='rounded-2xl' src={poster} alt="" />
              </div>
              <div className='grid grid-cols-2 gap-5 cursor-pointer'>
                <div className='border rounded-xl flex flex-col items-center justify-center text-center py-5 hover:border-red-200'>
                  <HiOutlineRocketLaunch className='w-15 h-15 bg-[#FFA1AD] rounded-full px-2 hover:bg-black/10'/>
                  <h2 className='font-bold text-xl'>Fast Booking</h2>
                  <p className='text-sm'>Book your trip in just a few seconds</p>
                </div>
                <div className='border rounded-xl flex flex-col items-center justify-center text-center py-5 hover:border-red-200'>
                  <FaHandHoldingDollar className='w-15 h-15 bg-[#FFA1AD] rounded-full px-2 hover:bg-black/10'/>
                  <h2 className='font-bold text-xl'>Fast Booking</h2>
                  <p className='text-sm'>Book your trip in just a few seconds</p>
                </div>
                <div className='border rounded-xl flex flex-col items-center justify-center text-center py-5 hover:border-red-200'>
                  <MdOutlineSecurityUpdateGood className='w-15 h-15 bg-[#FFA1AD] rounded-full px-2 hover:bg-black/10'/>
                  <h2 className='font-bold text-xl'>Fast Booking</h2>
                  <p className='text-sm'>Book your trip in just a few seconds</p>
                </div>
                <div className='border rounded-xl flex flex-col items-center justify-center text-center py-5 hover:border-red-200'>
                  <MdOutlineVerifiedUser  className='w-15 h-15 bg-[#FFA1AD] rounded-full px-2 hover:bg-black/10'/>
                  <h2 className='font-bold text-xl'>Fast Booking</h2>
                  <p className='text-sm'>Book your trip in just a few seconds</p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default WhyUkilLagbe
