import React, { useEffect, useState } from 'react'
import { CheckCircle, Zap, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LawyerList({singleData}) {

    const { name, image, title, services } = singleData;

    const navigate = useNavigate();

    const handleViewProfileBtn = () => {
        navigate("/lawyerProfile");
    }

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gray-50">
            <div className="bg-white rounded-lg shadow-lg p-6">
            <div className='mb-5'>
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Section */}
                    <div className="flex-1">
                        <div className="flex gap-4">
                            {/* Profile Image */}
                            <img
                                src={image}
                                alt="Lawyer Profile"
                                className="w-38 h-38 rounded-lg object-contain"
                            />

                            {/* Profile Info */}
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
                                    <CheckCircle className="w-5 h-5 text-blue-500 fill-blue-500" />
                                </div>
                                <p className="text-gray-600 text-sm mb-1">MA, LL.B, LL.M</p>
                                <p className="text-gray-900 font-semibold mb-2">{title}</p>
                                <p className="text-gray-600 text-sm mb-1">Licensed for 4 years</p>
                                <p className="text-gray-600 text-sm mb-1">District & Sessions Judge Court, Shariatpur</p>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="inline-block w-5 h-3 bg-green-600 rounded-sm"></span>
                                    <span className="font-medium">Dhaka, Bangladesh</span>
                                </div>
                            </div>
                        </div>

                        {/* Accepting Clients Badge */}
                        <div className="mt-4">
                            <span className="inline-flex items-center gap-1 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-full text-sm font-semibold">
                                <Zap className="w-4 h-4 fill-blue-600" />
                                Available
                            </span>
                        </div>

                        {/* Legal Services */}
                        <div className="mt-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Legal Services</h2>
                            <p className='underline italic text-blue-400'>{services}</p>
                            {/* <div className="flex flex-wrap gap-3 items-center">
                                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                                    Alimony & Child Support
                                </span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                                    Criminal Appeals
                                </span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                                    Defective Products
                                </span>
                                <button className="flex items-center justify-center w-10 h-10 bg-blue-50 text-blue-700 rounded-lg font-bold">
                                    A <ChevronRight className="w-4 h-4" />
                                </button>
                            </div> */}
                        </div>

                        {/* Description */}
                        <div className="mt-6">
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Best Lawyer in the world. Best Lawyer in the world. Best Lawyer in the world.
                                {/* <button className="text-blue-600 font-semibold hover:underline">
                                    ...See more
                                </button> */}
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Rates & Actions */}
                    <div className="lg:w-80 border-l border-gray-200 lg:pl-6">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-cyan-500 text-white w-12 h-12 rounded flex items-center justify-center text-xl font-bold">
                                0
                            </div>
                            <div className="flex text-gray-300">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-3xl">★</span>
                                ))}
                            </div>
                            <div className="px-3 py-1 border-2 border-cyan-500 text-cyan-500 rounded text-sm font-semibold">
                                0 reviews
                            </div>
                        </div>

                        {/* Rates */}
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Rates</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 font-medium">Online Consultations:</span>
                                    <span className="text-gray-900 font-semibold">৳ 5000 /hr</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 font-medium">Court Hearings:</span>
                                    <span className="text-gray-900 font-semibold">৳ 500 /hearing</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <button onClick={handleViewProfileBtn} className="flex-1 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition cursor-pointer">
                                View Profile
                            </button>
                            <button className="flex-1 px-6 py-3 bg-blue-900 text-white rounded-lg font-bold hover:bg-blue-800 transition cursor-pointer">
                                Hire
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
