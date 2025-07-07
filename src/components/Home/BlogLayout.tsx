import React from 'react';
import { BlogCard } from './BlogCard';
import { useRouter } from 'next/navigation';

export const BlogLayout: React.FC = () => {
  const featuredPost = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    author: "John Doe",
    date: "March 15, 2024",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    image: ""
  };

  const trendingPosts = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      author: "John Doe",
      date: "Aug 23, 2023",
      variant: 'trending' as const
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      author: "John Doe",
      date: "Aug 23, 2023",
      variant: 'highlight' as const
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      author: "John Doe",
      date: "Aug 23, 2023",
      variant: 'trending' as const
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      author: "John Doe",
      date: "Aug 23, 2023",
      variant: 'trending' as const
    }
  ];
 const router=useRouter()
  return (
    <div>
      <div className=" py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Latest</h1>
            </div>
            <BlogCard
              {...featuredPost}
              variant="featured"
              className="mb-6"
            />
          </div>

          {/* Trending Blogs Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Trending Blogs</h2>
              <button className="text-red-600 hover:text-red-800 font-medium text-sm transition-colors" onClick={()=>router.push('/blogs')}>
                See all
              </button>
            </div>
            <div className="space-y-4">
              {trendingPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  {...post}
                  variant={post.variant}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};