"use client";
import Image from 'next/image';
import { FaPaperPlane, FaCompass, FaRegSun } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative bgAccent py-20 md:py-10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 animate-spin-slow">
        <FaRegSun className="text-[#F66F4D] opacity-20 text-6xl" />
      </div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Discover The Best
            <span className="text-[#F66F4D] block mt-2">Lovely Places</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
            Plan and book your perfect trip with expert advice, travel tips, 
            destination information and inspiration from us.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 animate-slide-up">
            <button className="flex items-center border-2 border-[#F66F4D] rounded-full text-[#F66F4D] px-8 py-4 transition-all duration-300 hover:bg-[#F66F4D] hover:text-white">
              <span>BOOK NOW</span>
              <FaPaperPlane className="ml-2 animate-bounce-horizontal" />
            </button>
            
            <div className="flex items-center gap-2 text-gray-600">
              <FaCompass className="text-2xl animate-pulse" />
              <span className="font-medium">Explore More Places</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative">
          {/* Main Image with Floating Animation */}
          <div className="relative w-full max-w-2xl mx-auto animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F66F4D] to-transparent opacity-20 rounded-full blur-3xl" />
            
            <Image
              src="/hero.png" 
              alt="Travel Destination"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl relative z-10"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Animated Plane Icon */}
          <FaPaperPlane className="absolute -top-8 right-10 text-4xl text-[#F66F4D] animate-fly" />
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-8 -left-8 w-24 h-24 border-4 border-[#F66F4D] rounded-full opacity-20" />
          <div className="absolute top-16 -right-8 w-16 h-16 border-4 border-[#F66F4D] rounded-full opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default Hero;