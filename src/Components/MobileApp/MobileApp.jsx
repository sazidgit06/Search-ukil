import React from 'react'
import badge from "../../assets/google-play.png";
import poster from "../../assets/poster5.webp";
import { FcOk } from "react-icons/fc";


const MobileApp = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='space-y-5'>
            <h2 className="text-4xl font-bold mt-20">Get The Most of Ukil Lagbe With Our Mobile App</h2>
            <p>Download the Truck Lagbe mobile app for one touch access to your trip experience with the Truck Lagbe mobile app. You’ll get access to special features and exclusive offers.</p>
            <div className='font-medium'>
                <p className='flex items-center gap-2'>
                    <FcOk></FcOk>
                    Multiple location selection option</p>
                <p className='flex items-center gap-2'>
                    <FcOk></FcOk>
                    Fixed rate pickup rental within Dhaka city</p>
                <p className='flex items-center gap-2'>
                    <FcOk></FcOk>
                    Truck hiring for the whole day</p>
                <p className='flex items-center gap-2'>
                    <FcOk></FcOk>
                    Round-trip option</p>
            </div>
            <img className='w-35 h-10' src={badge} alt="" />
        </div>
        <div>
            <img className='mt-5 sm:mt-20' src={poster} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MobileApp
