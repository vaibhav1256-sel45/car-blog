import React from 'react';
const TechnologyCard =dynamic(()=>import( './TechnologyCard'));
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks/ReduxHooks';
import dynamic from 'next/dynamic';
import Loader from '@/app/loading';
import ErrorPage from '@/app/error';
import NoDataFound from '@/app/NoDataFound';

 const NewTechnologySection: React.FC = () => {
  const data = useAppSelector(state=>state.carBlogPosts)
 const technologyPosts=data.posts
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
        
     {data?.status === 'loading' ? (
  <Loader scrolling={true} />
) : data.error || !technologyPosts || technologyPosts.length === 0 ? (
<NoDataFound/>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {technologyPosts.slice(0, 4).map((post, index) => (
      <TechnologyCard
        key={index}
        {...post}
        className="hover:transform hover:-translate-y-1 transition-transform duration-300"
      />
    ))}
  </div>
)}

      </div>
    </section>
  );
};
export default NewTechnologySection