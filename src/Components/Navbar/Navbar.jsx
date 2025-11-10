import logo from "../../assets/logo.png"
import { AiOutlineShop } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { FcHome, FcAbout, FcServices, FcSearch    } from "react-icons/fc";
import "./Navbar.css";
import { NavLink } from "react-router-dom";



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
    <header className="">
      <nav className={`fixed z-50 w-full flex justify-around items-center py-5 ${
        scrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`} >
        {/* logo */}
        <div className='flex gap-10 items-center'>
          <a href="/">
            <img className='w-20 md:w-30' src={logo} alt="" />
          </a>
          <ul className='flex gap-2 hidden lg:block lg:flex text-lg'>
              <NavLink className='hover:bg-base-100/10 p-2 rounded' to="/">Home</NavLink>
              <NavLink className='hover:bg-base-100/10 p-2 rounded' to="/allLawyer">Find a Lawyer</NavLink>
              <NavLink className='hover:bg-base-100/10 p-2 rounded' to="/legalservice">Legal Services</NavLink>
          </ul>
        </div>
        {/* login & language translation */}
        <div className='flex gap-2 lg:gap-6'>
          <button className='btn btn-outline px-1 lg:px-6 lg:py-2  rounded flex items-center gap-1 cursor-pointer font-bold'>
            <img className='w-5 h-5' src="https://img.icons8.com/color/48/usa.png" alt="usa" />
            EN</button>
          <button className='bg-red-500 rounded-md cursor-pointer hover:bg-red-600 font-bold text-white w-14 sm:w-20'>Login</button>
        </div>
      </nav>


      {/* bottom navigation */}
      <nav className="fixed left-0 bottom-0 right-0 bg-white text-black py-4 z-50 flex justify-around items-center shadow-md border-t lg:hidden">
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
