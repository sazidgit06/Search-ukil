import logo from "../../assets/logo.png"
import { AiOutlineShop } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { FcHome, FcAbout, FcServices, FcSearch    } from "react-icons/fc";




const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className={`fixed z-50 w-full flex justify-around items-center py-5 ${
        scrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`} >
        {/* logo */}
        <div className='flex gap-10 items-center'>
          <a href="/">
            <img className='w-20 md:w-30' src={logo} alt="" />
          </a>

          <ul className='flex gap-2 hidden lg:block lg:flex'>
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
        <div className='flex gap-2 lg:gap-6'>
          <button className='flex gap-1 items-center font-bold hover:bg-white/10 p-1 rounded cursor-pointer hidden lg:block lg:flex'>
            <AiOutlineShop className='lg:w-7 lg:h-7' />
            TL Shop</button>
          <button className='btn btn-outline px-1 lg:px-6 lg:py-2  rounded flex items-center gap-1 cursor-pointer hover:bg-white/40 font-bold'>
            <img className='w-5 h-5' src="https://img.icons8.com/color/48/usa.png" alt="usa" />
            EN</button>
          <button className='btn btn-error font-bold text-white w-14 sm:w-20'>Login</button>
        </div>
      </nav>


      {/* bottom navigation */}
      <nav className="fixed left-0 bottom-0 right-0 bg-white py-4 z-50 flex justify-around items-center shadow-md border-t lg:hidden">
        <div className="flex flex-col items-center cursor-pointer" >
          < FcHome className="w-5 h-5" />
          <h2 className="font-bold">Home</h2>
        </div>
        <div className="flex flex-col items-center cursor-pointer" >
          < FcAbout className="w-5 h-5" />
          <h2 className="font-bold">About us</h2>
        </div>
        <div className="flex flex-col items-center cursor-pointer" >
          < FcServices className="w-5 h-5" />
          <h2 className="font-bold">Service</h2>
        </div>
        <div className="flex flex-col items-center cursor-pointer" >
          < FcSearch  className="w-5 h-5" />
          <h2 className="font-bold">Search</h2>
        </div>
        
      </nav>


    </header>
  )
}

export default Navbar
