import React from 'react'
import logo from "../../assets/logo.png"
import { AiOutlineShop } from "react-icons/ai";



const Navbar = () => {
  return (
    <header>
      <nav className='fixed z-50 w-full flex justify-evenly items-center py-3'>
        {/* logo */}
        <div className='flex gap-10 items-center'>
            <a href="/">
              <img className='w-20 md:w-30' src={logo} alt="" />
            </a>
        
            <ul className='flex gap-2 text-white hidden lg:block lg:flex'>
                <li>
                  <a className='hover:bg-base-100/10 p-2 rounded' href="/">Home</a>
                </li>
                <li>
                  <a className='hover:bg-base-100/10 p-2 rounded' href="/">About us</a>
                </li>
                <li>
                  <a className='hover:bg-base-100/10 p-2 rounded' href="/">Business</a>
                </li>
                <li>
                  <a className='hover:bg-base-100/10 p-2 rounded' href="/">Blog</a>
                </li>
                
            </ul>
        </div>
        {/* login & language translation */}
        <div className='flex gap-2 lg:gap-6 text-white'>
            <button className='flex gap-1 items-center font-bold hover:bg-white/10 p-1 rounded cursor-pointer hidden lg:block lg:flex'>
              <AiOutlineShop className='lg:w-7 lg:h-7' />
              TL Shop</button>
            <button className='btn btn-outline px-1 lg:px-6 lg:py-2  rounded flex items-center gap-1 cursor-pointer hover:bg-white/40 font-bold'>
              <img className='w-5 h-5' src="https://img.icons8.com/color/48/usa.png" alt="usa"/>
              EN</button>
              <button className='btn btn-error font-bold text-white w-14 sm:w-20'>Login</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
