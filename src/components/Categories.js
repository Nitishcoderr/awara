"use client";
import Image from 'next/image';
import { FaUmbrellaBeach, FaHiking, FaSpa, FaCity, FaTree, FaSnowflake } from 'react-icons/fa';

const Categories = () => {
  const categories = [
    { name: 'Beach Holidays', icon: <FaUmbrellaBeach />, image: '/beach.png' },
    { name: 'Adventure Tours', icon: <FaHiking />, image: '/adventure.png' },
    { name: 'Wellness Retreats', icon: <FaSpa />, image: '/spa.png' },
    { name: 'City Breaks', icon: <FaCity />, image: '/city.png' },
    { name: 'Wildlife Safaris', icon: <FaTree />, image: '/safari.png' },
    { name: 'Winter Escapes', icon: <FaSnowflake />, image: '/winter.png' },
  ];

  return (
    <section className="relative py-20 bgAccent">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 animate-spin-slow">
        <FaSnowflake className="text-[#F66F4D] opacity-10 text-6xl" />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Travel Categories
          </h2>
          <p className="text-gray-600 text-lg">
            Discover unique experiences tailored to your travel preferences. 
            Whether you're seeking relaxation or adventure, we've got you covered.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative h-48 w-48 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-[#F66F4D] opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full" />
                
                <Image
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="rounded-full object-cover w-full h-full scale-90 group-hover:scale-100 transition-transform duration-300"
                />
                
                {/* Icon */}
                <div className="absolute bottom-4 animate-float right-4 bg-white p-2 rounded-full shadow-lg text-[#F66F4D]">
                  {category.icon}
                </div>
              </div>

              {/* Category Name */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#F66F4D] transition-colors duration-300">
                  {category.name}
                </h3>
              </div>

              {/* Hover Effect Element */}
              <div className="absolute inset-0 border-2 border-[#F66F4D] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Animated decorative elements */}
        <div className="absolute bottom-20 left-10 opacity-10 animate-float">
          <FaUmbrellaBeach className="text-6xl text-[#F66F4D]" />
        </div>
      </div>
    </section>
  );
};

export default Categories;