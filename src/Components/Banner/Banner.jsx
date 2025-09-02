import React from 'react'
import img from "../../assets/img9.jpg";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";

const Banner = () => {
  return (
    <div>
      <div className='relative text-white'>
        <img className='h-[400px] sm:h-[700px] w-full object-fill' src={img} alt="" />
        <div className='absolute top-60 left-10 max-w-[600px] text-center space-y-5 hidden lg:block'>
          <h2 className='text-4xl font-bold'>Hello</h2>
          <p className='text-xs md:text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda recusandae perspiciatis, at ab numquam sunt repudiandae corrupti porro. Magni. Lorem, ipsum dolor sit amet consectetur adipisicingbr elit. Est, repellat.</p>
          <button className='btn btn-error text-white font-bold'>Get the app</button>
        </div>
        <div className='absolute top-30 sm:top-40 left-[10%] sm:left-[10%] lg:left-[40%]'>
          <div className='flex'>
            <img className='w-25 sm:w-60 lg:w-70' src={team1} alt="" />
            <img className='w-25 sm:w-60 lg:w-70' src={team2} alt="" />
            <img className='w-25 sm:w-60 lg:w-70' src={team3} alt="" />
          </div>
          <button className='absolute btn btn-error left-18 sm:left-[40%] lg:left-[40%] top-20 sm:top-40 lg:top-50 z-10 text-white font-bold'>
            Download the APP
          </button>
        </div>
      </div>

    </div>
  )
}

export default Banner
