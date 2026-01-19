import React, { use, useState } from 'react';
import { Scale, Shield, FileText, Users, Clock, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import allLawyerBanner from '../../assets/allLawyerBanner.jpg';
import img from '../../assets/allLawyerBanner.jpg';
import { useLocation } from 'react-router-dom';

export default function Hire() {


    const location = useLocation();
    const lawyer = location.state?.lawyer;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        category: '',
        description: '',
        urgency: 'normal'
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (formData.name && formData.phone && formData.category) {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
        } else {
            alert("Please fill in all required fields.");
        }
    };

    return (
        <>
            <div>
                <div>
                    <img className='absolute mx-auto top-0 w-full h-[80px] object-cover' src={allLawyerBanner} alt="" />
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-30 pb-10">

                        <div className="backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                            <h2 className="text-3xl font-bold text-center mb-8">
                                Request a Consultation
                            </h2>
                            <p className='pb-10'>
                                You are requesting a consultation with <span className="font-bold">{lawyer?.name}</span>, <span className="font-semibold">{lawyer?.title} </span> of <span className="font-semibold">{lawyer?.courtComplex}</span>, <span className="font-semibold">{lawyer?.district}</span>.  Please fill out the form below, and we will try to get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="01XXXXXXXXX"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Legal Category *
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-900/30 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select a category</option>
                                        <option value="civil">Civil Law</option>
                                        <option value="family">Family Law</option>
                                        <option value="criminal">Criminal Law</option>
                                        <option value="corporate">Corporate Law</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Case Urgency *
                                    </label>
                                    <div className="flex gap-4">
                                        {['normal', 'urgent', 'emergency'].map((level) => (
                                            <div key={level} className="flex items-center cursor-pointer" onClick={() => setFormData({ ...formData, urgency: level })}>
                                                <div className={`w-4 h-4 rounded-full border-2 mr-2 flex items-center justify-center ${formData.urgency === level ? 'border-blue-500' : 'border-slate-600'}`}>
                                                    {formData.urgency === level && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
                                                </div>
                                                <span className="capitalize">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Describe Your Legal Issue
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full px-4 py-3 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Please provide details about your case..."
                                    ></textarea>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                                >
                                    Submit Request
                                </button>
                                {submitted && (
                                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
                                        Thank you! We'll contact you within 24 hours.
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-slate-500/10 py-12 max-w-6xl mx-auto rounded-4xl mb-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                <div className="flex flex-col items-center">
                                    <Phone className="w-8 h-8 text-blue-400 mb-3" />
                                    <h3 className="font-semibold mb-1">Call Us</h3>
                                    <p className="text-slate-400">+880 1713 726345</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Mail className="w-8 h-8 text-blue-400 mb-3" />
                                    <h3 className="font-semibold mb-1">Email Us</h3>
                                    <p className="text-slate-400">ukilvai@gmail.com</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <MapPin className="w-8 h-8 text-blue-400 mb-3" />
                                    <h3 className="font-semibold mb-1">Visit Us</h3>
                                    <p className="text-slate-400">Joleswaritola, Bogura, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div>
                    <img className='w-1/2' src={img} alt="" />
                </div> */}
            </div>
        </>
    )
}
