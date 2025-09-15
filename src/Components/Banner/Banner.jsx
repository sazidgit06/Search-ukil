import React from 'react'
import img from "../../assets/img9.jpg";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";



const Banner = () => {
  return (
    <div>
      <div className='relative text-white'>
        <img className='h-[400px] sm:h-[700px] w-full object-fill' src={img} alt="" />
        <div className='absolute top-25 sm:top-50 left-15 sm:left-52 max-w-[350px] sm:max-w-[400px] text-start space-y-4 sm:space-y-6'>
          <h2 className='text-4xl sm:text-6xl font-medium sm:font-bold'>Schedule Your Consult</h2>
          <button className='bg-red-500 rounded-md hover:bg-red-600 px-4 py-2 cursor-pointer text-white font-bold flex items-center gap-1'>
            <CiMobile3  className='h-6 w-6'/>
            Get the app
            < IoIosArrowRoundForward  className='h-6 w-6' />
            </button>
        </div>
        <div className='absolute top-30 sm:top-40 left-[10%] sm:left-[20%] lg:left-[40%] hidden lg:block'>
          <div className='flex'>
            <img className='w-25 sm:w-60 lg:w-70' src={team1} alt="" />
            <img className='w-25 sm:w-60 lg:w-70' src={team2} alt="" />
            <img className='w-25 sm:w-60 lg:w-70' src={team3} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Banner
