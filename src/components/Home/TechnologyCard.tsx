import { CarBlogPost } from '@/types/Cartypes';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FiUser } from "react-icons/fi";


interface technology extends CarBlogPost{
  className:string
}

const TechnologyCard: React.FC<technology> = ({
  id,
  title,
  author,
  thumbnail,
  className = '',
  date
}) => {
  const router=useRouter()
  return (
    <article className={`bg-[#F4F0F8] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group ${className} mb-5 cursor-pointer`} onClick={()=>router.push(`/details/${id}`)}>
      <div className="relative overflow-hidden flex justify-center mt-5">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-[90%] h-48 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-4 group-hover:text-red-600 transition-colors duration-200">
          {title}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
             
                <FiUser className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-medium text-gray-900 text-sm">{author}</p>
              <p className="text-gray-500 text-xs">{date}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-gray-400">
            <div className="flex items-center space-x-1">
                <span className="text-xl  font-bold">·</span>
               <span className='text-sm mt-1'>3 min read</span>
              
            </div>
            
          </div>
        </div>
      </div>
    </article>
  );
};
export  default TechnologyCard