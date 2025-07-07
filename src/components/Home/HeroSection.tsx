import React from 'react';
import { FiSend, FiChevronRight } from 'react-icons/fi';

function HeroSection() {
  return (
    <div className="relative overflow-hidden ">
      {/* Background Image covering entire hero */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-75"
        style={{
          backgroundImage:
            "url('/hero.jpg')",
        }}
      ></div>

      {/* Overlay gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 "></div>

      {/* Hero Content */}
      <div className="relative h-[80vh]  flex items-center mt-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Your Journey</span>
              <span className="block">Your Car</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Your Way
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-md">
             Start your automotive adventure with us. Dive into the newest car reviews, up-to-date industry news, and expert advice—all crafted to ignite your love for driving. Find your next vehicle and stay informed with Car Blogify.
            </p>

            <div className="flex flex-col mb-20 sm:flex-row gap-4 pb-2">
              <button className="group bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 flex items-center justify-center gap-2">
                Subscribe
                <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* <button className="group border-2 border-gray-600 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ">
                Learn More
                <FiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
    </div>
  );
}

export default HeroSection;
