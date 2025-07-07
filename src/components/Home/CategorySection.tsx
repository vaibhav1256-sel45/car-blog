import React from 'react';
import { MdDirectionsCar } from "react-icons/md";
import { FaWrench } from "react-icons/fa";
import { FiSettings, FiNavigation } from "react-icons/fi";

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`bg-[#F4F0F8] rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group cursor-pointer ${className}`}>
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-blue-50 group-hover:to-blue-100 transition-all duration-300">
        <div className="text-gray-600 group-hover:text-red-600 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-red-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const CategorySection: React.FC = () => {
  const categories = [
    {
      icon: <MdDirectionsCar className="w-8 h-8" />,
      title: "Car Reviews",
      description: "Lorem ipsum dolor sit amet consectetur. Urna dignissim ac adipiscing ut."
    },
    {
      icon: <FaWrench className="w-8 h-8" />,
      title: "Maintenance Tips",
      description: "Lorem ipsum dolor sit amet consectetur. Urna dignissim ac adipiscing ut."
    },
    {
      icon: <FiSettings className="w-8 h-8" />,
      title: "Car Modifications",
      description: "Lorem ipsum dolor sit amet consectetur. Urna dignissim ac adipiscing ut."
    },
    {
      icon: <FiNavigation className="w-8 h-8" />,
      title: "Driving Tips",
      description: "Lorem ipsum dolor sit amet consectetur. Urna dignissim ac adipiscing ut."
    }
  ];

  return (
    <section className="py-8">
      <div >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mr-4">All Category</h2>
          <div className=" h-1.5 bg-black w-20"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              className="hover:transform hover:-translate-y-2 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};