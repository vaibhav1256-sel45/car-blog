import React from 'react';
import { TechnologyCard } from './TechnologyCard';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks/ReduxHooks';

export const NewTechnologySection: React.FC = () => {
  const technologyPosts = useAppSelector(state=>state.carBlogPosts.posts)
  const router=useRouter();
  return (
    <section className="">
      <div className="">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">New Technology</h2>
          
          <button className="text-red-600 hover:text-red-800 font-medium text-sm transition-colors duration-200 hover:underline cursor-pointer" onClick={()=>router.push('/blogs')}>
            See All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologyPosts.slice(0,4).map((post, index) => (
            <TechnologyCard
              key={index}
              {...post}
              className="hover:transform hover:-translate-y-1 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};