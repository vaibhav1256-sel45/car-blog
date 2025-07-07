import React from 'react';
import { TechnologyCard } from './TechnologyCard';

export const NewTechnologySection: React.FC = () => {
  const technologyPosts = [
    {
      title: "A Review Of Cars With Advanced Infotainment Systems",
      author: {
        name: "Darkeen",
        date: "Jan 10, 2024"
      },
      image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 247,
      comments: 18
    },
    {
      title: "A Deep Dive Into Sports Cars",
      author: {
        name: "Darkeen",
        date: "Jan 10, 2024"
      },
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 189,
      comments: 12
    },
    {
      title: "Reviewing Cars With The Best Resale Value",
      author: {
        name: "Darkeen",
        date: "Jan 10, 2024"
      },
      image: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 156,
      comments: 9
    },
    {
      title: "Reviewing Cars With The Best Resale Value",
      author: {
        name: "Darkeen",
        date: "Jan 10, 2024"
      },
      image: "https://images.pexels.com/photos/1062249/pexels-photo-1062249.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 203,
      comments: 15
    }
  ];

  return (
    <section className="">
      <div className="">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">New Technology</h2>
          
          <button className="text-red-600 hover:text-red-800 font-medium text-sm transition-colors duration-200 hover:underline">
            See All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologyPosts.map((post, index) => (
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