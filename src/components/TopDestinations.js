"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const TopDestinations = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const destinations = [
    { 
      id: 1,
      category: 'mountain',
      image: '/mountain.jpg',
      rating: 4.8,
      country: 'Switzerland',
      name: 'Alpine Peaks',
      aspect: 'aspect-square' // Square
    },
    { 
      id: 2,
      category: 'beach',
      image: '/beach.jpg',
      rating: 4.7,
      country: 'Maldives',
      name: 'Crystal Waters',
      aspect: 'aspect-[3/4]' // Portrait
    },
    { 
      id: 3,
      category: 'city',
      image: '/city.jpg',
      rating: 4.6,
      country: 'Japan',
      name: 'Tokyo Lights',
      aspect: 'aspect-[4/3]' // Landscape
    },
    { 
      id: 4,
      category: 'desert',
      image: '/desert.jpg',
      rating: 4.9,
      country: 'UAE',
      name: 'Golden Sands',
      aspect: 'aspect-[5/4]' // Custom
    },
    { 
      id: 5,
      category: 'forest',
      image: '/forest.jpg',
      rating: 4.5,
      country: 'Brazil',
      name: 'Amazon Jungle',
      aspect: 'aspect-[4/5]' // Tall
    },
  ];

  const filters = ['all', 'mountain', 'beach', 'city', 'forest'];

  const filteredDestinations = destinations.filter(dest => 
    activeFilter === 'all' ? true : dest.category === activeFilter
  );

  return (
    <section className="relative py-20 bgAccent">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Top Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sost Brilliant reasons Entrada should be your one-stop-shop!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full capitalize transition-all ${
                activeFilter === filter 
                  ? 'bg-[#F66F4D] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Pinterest-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredDestinations.map((dest) => (
            <div 
              key={dest.id}
              className={`relative group break-inside-avoid rounded-2xl shadow-lg ${dest.aspect}`}
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full flex items-center gap-1">
                  <FaStar className="text-[#F66F4D]" />
                  <span className="font-semibold">{dest.rating}</span>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Location Info */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{dest.country}</h3>
                  <p className="text-lg">{dest.name}</p>
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 border-4 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="absolute inset-0 bg-[#F66F4D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-[#F66F4D]/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#F66F4D]/10 rounded-full blur-xl" />
    </section>
  );
};

export default TopDestinations;