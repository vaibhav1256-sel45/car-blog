'use client'
import { FaCalendarAlt, FaUser, FaStar, FaTag, FaArrowLeft } from "react-icons/fa";
import SpecificationsCard from '@/components/details/SpecificationsCard';
import { useAppSelector } from "@/hooks/ReduxHooks";
import { notFound, useParams } from "next/navigation";
import Layout from "@/Layout/Layout";
import Card from "@/components/Blogs/Card";

export default function DetailPage() {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <FaStar className="w-5 h-5 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <FaStar className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <FaStar key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      );
    }

    return stars;
  };

  const { id } = useParams();
  const data = useAppSelector(state => state.carBlogPosts.posts);
  const carData = data.find(val => val.id == Number(id));
  if (!carData) return notFound();

  return (
    <Layout>
      <div className="min-h-screen mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Row-wise flex layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left: Specifications Card */}
            <div className="md:w-1/3 w-full">
              <div className="sticky top-8 space-y-6">
                {/* Specifications Card */}
                <SpecificationsCard specifications={carData.specifications} />

                {/* Quick Stats */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Rating</span>
                      <div className="flex items-center space-x-1">
                        <FaStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{carData.ratings}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Category</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                        {carData.tag}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Published</span>
                      <span className="font-semibold text-gray-900">
                        {new Date(carData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Share Section */}
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Love this review?</h3>
                  <p className="text-blue-100 mb-4">Share it with fellow car enthusiasts!</p>
                  <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    Share Article
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Main Content */}
            <div className="md:w-2/3 w-full space-y-8">
              {/* Article Header */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Hero Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={carData?.thumbnail}
                    alt={carData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Tag Overlay */}
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center space-x-1 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <FaTag className="w-4 h-4" />
                      <span>{carData.tag}</span>
                    </div>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-8">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {carData.title}
                  </h1>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FaUser className="w-5 h-5" />
                      <span className="font-medium text-red-600">{carData.author}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-600">
                      <FaCalendarAlt className="w-5 h-5" />
                      <span>{new Date(carData.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {renderStars(carData.ratings)}
                      </div>
                      <span className="text-gray-600 font-medium">{carData.ratings}</span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {carData.description}
                    </p>

                    {/* Additional Content Sections */}
                    <div className="mt-8 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Overview</h3>
                        <p className="text-gray-700 leading-relaxed">
                          The {carData.specifications.make} {carData.specifications.model} represents a pinnacle of automotive engineering,
                          combining raw power with sophisticated technology. With {carData.specifications.power} at your disposal,
                          this vehicle delivers an exhilarating driving experience that few can match.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology & Innovation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Advanced engineering meets cutting-edge technology in this remarkable vehicle. The integration of
                          state-of-the-art systems ensures not only exceptional performance but also safety and comfort for
                          every journey. From its {carData.specifications.drivetrain} system to its impressive {carData.specifications.range} range,
                          every aspect has been meticulously designed.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Driving Experience</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Behind the wheel, the {carData.specifications.model} offers an unparalleled driving experience.
                          The acceleration from 0-60 mph in just {carData.specifications.acceleration} is nothing short of breathtaking,
                          while the top speed of {carData.specifications.topSpeed} showcases its true performance capabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
         
          
        </div>
      </div>
    </Layout>
  );
}
