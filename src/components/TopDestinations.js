"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaPlane, FaCompass, FaSuitcase, FaMapPin } from 'react-icons/fa';

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

    // Animation variants
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, scale: 0.8 }
      };
    
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
          }
        }
      };

  return (
    <section className="relative py-20 bgAccent overflow-hidden">

<motion.div
        className="absolute top-1/4 left-0 text-[#F66F4D]/10 text-6xl z-0"
        animate={{ x: [-100, 1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <FaPlane className="rotate-45" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-20 text-[#F66F4D]/10 text-8xl z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <FaCompass />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4 text-[#F66F4D]/10 text-5xl z-0"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FaSuitcase />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-1/3 text-[#F66F4D]/10 text-7xl z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <FaMapPin />
      </motion.div>
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

            {/* Animated Filter Buttons */}
            <motion.div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full capitalize transition-all ${
                activeFilter === filter 
                  ? 'bg-[#F66F4D] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Animated Grid */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          >
            <AnimatePresence initial={false}>
              {filteredDestinations.map((dest) => (
                <motion.div
                  key={dest.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  transition={{ duration: 0.3 }}
                  className={`relative group break-inside-avoid rounded-2xl shadow-lg ${dest.aspect}`}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="/placeholder.jpg"
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
                   
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-[#F66F4D]/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#F66F4D]/10 rounded-full blur-xl" />
    </section>
  );
};

export default TopDestinations;