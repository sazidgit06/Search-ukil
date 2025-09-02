import React from 'react'
import logo from "../../assets/logo.png"
import { LiaFlagUsaSolid } from "react-icons/lia";


const Navbar = () => {
  return (
    <header>
      <nav className='fixed z-50 w-full flex justify-around items-center py-3'>
        {/* logo */}
        <div className='flex gap-10 items-center'>
            <a href="/">
              <img className='w-30' src={logo} alt="" />
            </a>
        
            <ul className='flex gap-2 text-white'>
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
        <div className='flex gap-6 text-white'>
            <button className='btn btn-outline px-6 py-2 rounded flex items-center gap-1 cursor-pointer hover:bg-white/50'>
              <img width="28" height="28" src="https://img.icons8.com/color/48/usa.png" alt="usa"/>
              EN</button>
              <button className='btn btn-error'>Login</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
