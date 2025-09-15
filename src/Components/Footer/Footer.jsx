import React from 'react'
import img from "../../assets/logo.png";
import img2 from "../../assets/google-play.png";

const Footer = () => {
    return (
        <>
            <div className='sm:h-[350px]'>
                <footer className="footer sm:footer-horizontal bg-base-200 text-base-content w-9/12 mx-auto py-8">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="w-80">
                            <label>Enter your email address</label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>

                </footer>
                <hr className='w-9/12 mx-auto text-gray-300' />
                <div className='w-9/12 mx-auto my-4 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0'>
                    <div className=''>
                        <img src={img} alt="" className='w-30' />
                        <p className='mt-4'>Copyright © Ukil vai Limited | All Rights Reserved</p>
                    </div>
                    <div className='text-start sm:text-end'>
                        <h2 className='font-bold sm:text-xl mb-4'>Download Truck Lagbe App</h2>
                        <button><img src={img2} alt="" className='w-40 mb-25 lg:mb-0' /></button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
