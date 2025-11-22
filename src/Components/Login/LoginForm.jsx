import React, { useState } from 'react';
import allLawyerBanner from '../../assets/allLawyerBanner.jpg';


export default function LoginForm() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen flex">
        <img className='absolute mx-auto top-0 w-full h-[80px] object-cover' src={allLawyerBanner} alt="" />
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold italic">Welcome To UkilLagbe</h1>
          </div>

          {/* Google Sign In Button */}
          <button className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 rounded-full py-3 px-6 mb-6 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-gray-700 font-medium">Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>

          {/* Continue Button */}
          <button className="w-full bg-gray-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition-colors mb-6">
            Continue
          </button>

          {/* Terms and Privacy */}
          <p className="text-center text-sm text-gray-600 mb-6">
            By continuing, you agree to our{' '}
            <a href="#" className="underline hover:text-gray-900">
              Terms
            </a>{' '}
            and{' '}
            <a href="#" className="underline hover:text-gray-900">
              Privacy Policy
            </a>
            .
          </p>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="underline hover:text-gray-900">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Right side - Glowing Mushrooms Background */}
      <div className="hidden mt-20 lg:block lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Stars */}
        <div className="absolute top-10 right-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-40 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-20 right-60 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Mushroom Illustration Area */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3">
          {/* Ground glow */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-pink-500/30 to-transparent"></div>
          
          {/* Simplified mushroom shapes */}
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 800 600" fill="none">
            {/* Large mushroom 1 */}
            <ellipse cx="300" cy="480" rx="80" ry="15" fill="#4A148C" opacity="0.3" />
            <path d="M300 480 Q280 400 240 380 Q240 360 300 360 Q360 360 360 380 Q320 400 300 480" fill="url(#grad1)" />
            <rect x="285" y="480" width="30" height="80" rx="15" fill="url(#stem1)" />
            
            {/* Large mushroom 2 */}
            <ellipse cx="500" cy="450" rx="70" ry="12" fill="#4A148C" opacity="0.3" />
            <path d="M500 450 Q485 380 450 365 Q450 350 500 350 Q550 350 550 365 Q515 380 500 450" fill="url(#grad2)" />
            <rect x="487" y="450" width="26" height="70" rx="13" fill="url(#stem2)" />
            
            {/* Medium mushroom */}
            <ellipse cx="420" cy="500" rx="50" ry="10" fill="#4A148C" opacity="0.3" />
            <path d="M420 500 Q410 450 385 440 Q385 430 420 430 Q455 430 455 440 Q430 450 420 500" fill="url(#grad3)" />
            <rect x="410" y="500" width="20" height="50" rx="10" fill="url(#stem3)" />
            
            {/* Small mushrooms */}
            <ellipse cx="360" cy="520" rx="30" ry="6" fill="#4A148C" opacity="0.3" />
            <path d="M360 520 Q355 495 340 490 Q340 485 360 485 Q380 485 380 490 Q365 495 360 520" fill="url(#grad4)" />
            <rect x="353" y="520" width="14" height="30" rx="7" fill="url(#stem4)" />
            
            <ellipse cx="580" cy="510" rx="35" ry="7" fill="#4A148C" opacity="0.3" />
            <path d="M580 510 Q573 480 555 473 Q555 467 580 467 Q605 467 605 473 Q587 480 580 510" fill="url(#grad5)" />
            <rect x="571" y="510" width="18" height="40" rx="9" fill="url(#stem5)" />
            
            {/* Gradients */}
            <defs>
              <linearGradient id="grad1" x1="300" y1="360" x2="300" y2="480" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E91E63" />
                <stop offset="50%" stopColor="#9C27B0" />
                <stop offset="100%" stopColor="#673AB7" />
              </linearGradient>
              <linearGradient id="grad2" x1="500" y1="350" x2="500" y2="450" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2196F3" />
                <stop offset="50%" stopColor="#3F51B5" />
                <stop offset="100%" stopColor="#673AB7" />
              </linearGradient>
              <linearGradient id="grad3" x1="420" y1="430" x2="420" y2="500" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FF4081" />
                <stop offset="100%" stopColor="#9C27B0" />
              </linearGradient>
              <linearGradient id="grad4" x1="360" y1="485" x2="360" y2="520" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E91E63" />
                <stop offset="100%" stopColor="#7B1FA2" />
              </linearGradient>
              <linearGradient id="grad5" x1="580" y1="467" x2="580" y2="510" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3F51B5" />
                <stop offset="100%" stopColor="#5E35B1" />
              </linearGradient>
              <linearGradient id="stem1" x1="300" y1="480" x2="300" y2="560" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#BA68C8" />
                <stop offset="100%" stopColor="#7B1FA2" />
              </linearGradient>
              <linearGradient id="stem2" x1="500" y1="450" x2="500" y2="520" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#9575CD" />
                <stop offset="100%" stopColor="#5E35B1" />
              </linearGradient>
              <linearGradient id="stem3" x1="420" y1="500" x2="420" y2="550" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#BA68C8" />
                <stop offset="100%" stopColor="#8E24AA" />
              </linearGradient>
              <linearGradient id="stem4" x1="360" y1="520" x2="360" y2="550" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#BA68C8" />
                <stop offset="100%" stopColor="#8E24AA" />
              </linearGradient>
              <linearGradient id="stem5" x1="580" y1="510" x2="580" y2="550" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#9575CD" />
                <stop offset="100%" stopColor="#6A1B9A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}