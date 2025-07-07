import { CarBlogPost } from '@/types/Cartypes'
import React from 'react'
import { FaCalendarAlt, FaStar, FaUser } from 'react-icons/fa'

function HeroSection({post}:{post:CarBlogPost}) {
      const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  return (
      <div className="relative overflow-hidden mt-12 ">
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-transparent z-10"></div>
           <img
             src={post.thumbnail}
             alt={post.title}
             className="w-full h-[70vh] object-cover"
           />
           {/* Hero Content */}
           <div className="absolute inset-0 z-20 flex items-center">
             <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
               <div className="max-w-3xl">
                 <div className="flex items-center space-x-4 mb-6">
                   <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-red-500 text-white backdrop-blur-sm">
                     {post.tag}
                   </span>
                   <div className="flex items-center text-white/90">
                     <FaStar className="w-5 h-5 text-yellow-400 mr-1" />
                     <span className="font-semibold">{post.ratings}</span>
                   </div>
                 </div>
                 
                 <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                   {post.title}
                 </h1>
                 
                 <div className="flex items-center space-x-6 text-white/80 mb-8">
                   <div className="flex items-center">
                     <FaUser className="w-5 h-5 mr-2" />
                     <span className="font-medium">{post.author}</span>
                   </div>
                   <div className="flex items-center">
                     <FaCalendarAlt className="w-5 h-5 mr-2" />
                     <span>{formatDate(post.date)}</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
  )
}

export default HeroSection