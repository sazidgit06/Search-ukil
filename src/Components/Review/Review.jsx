import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon0 from "../../assets/icon-0.webp";
import icon1 from "../../assets/icon-1.webp";
import icon2 from "../../assets/icon-2.webp";
import icon3 from "../../assets/icon-3.webp";
import icon4 from "../../assets/icon-4.webp";

function Review() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024, // for tablets & below
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600, // for mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="text-center">
                <h2 className="text-4xl font-bold my-5 mt-20">Our Customer's Saying</h2>
                <p className="mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, suscipit!</p>
            </div>
            <div className="slider-container mb-20 cursor-pointer bg-white ">
                <Slider {...settings}>
                    {/* 0 */}
                    <div className="px-4 py-2">
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, rem.</p>
                        <div className="flex gap-5">
                            <img className="w-20 h-20" src={icon0} alt="" />
                            <div>
                                <h2 className="text-xl font-bold">Sazid Hasan</h2>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    {/* 1 */}
                    <div className="px-4 py-2">
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, rem.</p>
                        <div className="flex gap-5">
                            <img className="w-20 h-20" src={icon1} alt="" />
                            <div>
                                <h2 className="text-xl font-bold">Sazid Hasan</h2>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="px-4 py-2">
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, rem.</p>
                        <div className="flex gap-5">
                            <img className="w-20 h-20" src={icon2} alt="" />
                            <div>
                                <h2 className="text-xl font-bold">Sazid Hasan</h2>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="px-4 py-2">
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, rem.</p>
                        <div className="flex gap-5">
                            <img className="w-20 h-20" src={icon3} alt="" />
                            <div>
                                <h2 className="text-xl font-bold">Sazid Hasan</h2>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="px-4 py-2">
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, rem.</p>
                        <div className="flex gap-5">
                            <img className="w-20 h-20" src={icon4} alt="" />
                            <div>
                                <h2 className="text-xl font-bold">Sazid Hasan</h2>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Review;
