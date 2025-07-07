import React from 'react';
import { FiSend } from 'react-icons/fi';


export  default function HeroSection() {
  return (
    <section className="relative lg:max-h-[88vh] bg-[#31323C] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto  py-16 px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Your Journey
              </h1>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight ">
                Your Car
              </h1>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Your Way
              </h1>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg">
            Start your automotive adventure with us. Dive into the newest car reviews, up-to-date industry news, and expert advice—all crafted to ignite your love for driving. Find your next vehicle and stay informed with Car Blogify.
            </p>
            
            <button className="group bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2">
              <span>Subscribe</span>
              <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Right Side - Car Images Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Top Row */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img 
                    src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Sports car"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img 
                    src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Classic car interior"
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
              
              {/* Bottom Row */}
              <div className="space-y-4 mt-8">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img 
                    src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Yellow sports car"
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img 
                    src="https://images.pexels.com/photos/1062249/pexels-photo-1062249.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Vintage car"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
      
    
    </section>
  );
};