import React from 'react';
import { Star } from "lucide-react";
import { CheckCircle, Zap, ChevronRight } from 'lucide-react';
import { Search } from "lucide-react";
import ukil1 from "../../assets/ukil-1.webp";
import { useNavigate } from 'react-router-dom';

export default function allLawyer() {

    const navigate = useNavigate();

    const handleViewProfileBtn = () => {
        navigate("/lawyerProfile")
    }

    return (
        <div className='pt-30 pb-10 flex'>
            {/* filter section */}
            <aside className="w-72 bg-white p-4 mt-2 rounded-xl shadow-sm border ml-10">
                <h2 className="text-lg font-semibold mb-4">Filter</h2>

                {/* District */}
                <div className="mb-4">
                    <label className="block font-semibold mb-2">District</label>
                    <select className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select district</option>
                    </select>
                </div>

                <hr className="my-3" />

                {/* Legal Services */}
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Legal Services</label>
                    <select className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select legal service</option>
                    </select>
                </div>

                <hr className="my-3" />

                {/* Booking Type */}
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Booking Type</label>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" /> Online Consultation
                        </label>
                        <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" /> Court Hearing
                        </label>
                    </div>
                </div>

                <hr className="my-3" />

                {/* Professional Type */}
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Professional Type</label>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" /> Lawyer
                        </label>
                        <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" /> Advocate
                        </label>
                    </div>
                </div>

                <hr className="my-3" />

                {/* Availability */}
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Availability</label>
                    <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" /> Available
                    </label>
                </div>

                <hr className="my-3" />

                {/* Rating */}
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Rating</label>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Star className="w-4 h-4 text-gray-400" />
                        <Star className="w-4 h-4 text-gray-400" />
                        <Star className="w-4 h-4 text-gray-400" />
                        <Star className="w-4 h-4 text-gray-400" />
                        <Star className="w-4 h-4 text-gray-400" />
                        <span className="ml-1">0 and up</span>
                    </div>
                </div>

                <hr className="my-3" />

                {/* Identity */}
                <div>
                    <label className="block font-semibold mb-2">Identity</label>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" /> Verified
                        </label>
                        <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" /> Not Verified
                        </label>
                    </div>
                </div>
            </aside>
            {/* filter section end */}

            <div>
                {/* search bar */}
                <div className="w-full max-w-6xl mx-auto p-4">
                    <div className="bg-blue-900 rounded-lg shadow-lg flex items-center gap-4 px-6 py-4">
                        {/* Search Icon */}
                        <Search className="text-white w-6 h-6 flex-shrink-0" />

                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Name or username"
                            className="flex-1 bg-transparent text-white placeholder-blue-200 outline-none text-lg"
                        />

                        {/* Search Button */}
                        <button className="bg-white text-blue-900 px-8 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                            Search
                        </button>
                    </div>
                </div>
                {/* search bar end */}
                {/* lawwyers list */}
                <div className="max-w-6xl mx-auto p-6 bg-gray-50">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Left Section */}
                            <div className="flex-1">
                                <div className="flex gap-4">
                                    {/* Profile Image */}
                                    <img
                                        src={ukil1}
                                        alt="Lawyer Profile"
                                        className="w-38 h-38 rounded-lg object-contain"
                                    />

                                    {/* Profile Info */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h1 className="text-2xl font-bold text-gray-900">Lawyer Test</h1>
                                            <CheckCircle className="w-5 h-5 text-blue-500 fill-blue-500" />
                                        </div>
                                        <p className="text-gray-600 text-sm mb-1">MA, LL.B, LL.M</p>
                                        <p className="text-gray-900 font-semibold mb-2">Advocate</p>
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
                                        Accepting Clients
                                    </span>
                                </div>

                                {/* Legal Services */}
                                <div className="mt-6">
                                    <h2 className="text-xl font-bold text-gray-900 mb-4">Legal Services</h2>
                                    <div className="flex flex-wrap gap-3 items-center">
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
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mt-6">
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Best Lawyer in the world. Best Lawyer in the world. Best Lawyer in the world. Best Lawyer in the world. Best Lawyer in t{' '}
                                        <button className="text-blue-600 font-semibold hover:underline">
                                            ...See more
                                        </button>
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
                {/* lawwyers list end */}
            </div>
        </div>
    )
}
