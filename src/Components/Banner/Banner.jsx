import React from 'react'
import img from "../../assets/img9.jpg";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";

const Banner = () => {
  return (
    <div>
      <div className='relative text-white '>
        <img className='h-[700px] w-full object-fill' src={img} alt="" />
        <div className='absolute top-40 left-30 grid grid-cols-2'>
          <div className='space-y-7 max-w-[500px] text-center mt-20'>
            <h2 className='text-4xl font-bold'>Hello</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda recusandae perspiciatis, at ab numquam <br /> sunt repudiandae corrupti porro. Magni. Lorem, <br /> ipsum dolor sit amet consectetur adipisicingbr elit. Est, repellat.</p>
            <button className='btn btn-error'>Get the app</button>
          </div>
          <div className='flex max-w-[400px]'>
            <img className='w-70' src={team1} alt="" />
            <img className='w-70' src={team2} alt="" />
            <img className='w-70' src={team3} alt="" />
            <button className='absolute btn btn-error right-2 top-60 z-10'>
              Download the APP
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Banner
