"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // Using React Icons for the BOOK NOW button

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bgAccent border-b-[0.5px] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-10 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold text-gray-800">
            YourLogo
          </Link>
        </div>

        {/* Navigation links in the center */}
        <nav className="hidden md:flex space-x-20 items-center">
          <Link href="/" className="color1 hover:text-[#F66F4D] transition-all duration-300 font-medium text-2xl uppercase">
            Home
          </Link>
          <Link href="/about" className="color1 hover:text-[#F66F4D] transition-all duration-300 font-medium text-2xl uppercase">
            About
          </Link>
          <Link href="/destination" className="color1 hover:text-[#F66F4D] transition-all duration-300 font-medium text-2xl uppercase">
            Destination
          </Link>
          <Link href="/tour" className="color1 hover:text-[#F66F4D] transition-all duration-300 font-medium text-2xl uppercase">
            Tour
          </Link>
        </nav>

        {/* BOOK NOW button with icon on the right */}
        <div className="flex-shrink-0 hidden md:block">
          <button className="flex items-center border-2 border-[#F66F4D] rounded-full text-[#F66F4D] px-6 py-4 transition duration-300 font-semibold hover:bg-[#F66F4D] hover:text-white">
            <span>BOOK NOW</span>
            <FaPaperPlane className="ml-2 animate-bounce-horizontal" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden color1 hover:text-[#F66F4D] transition-all duration-300 font-medium text-2xl uppercase focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu links */}
      {isMenuOpen && (
        <div className="md:hidden bgAccent shadow-md py-4">
          <Link href="/" className="block px-4 py-2 color1 hover:text-[#F66F4D] transition-all duration-300 font-medium text-2xl uppercase">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 color1 hover:text-[#F66F4D] transition-all duration-300 font-medium text-2xl uppercase">
            About
          </Link>
          <Link href="/destination" className="block px-4 py-2 color1 hover:text-[#F66F4D] transition-all duration-300 font-medium text-2xl uppercase">
            Destination
          </Link>
          <Link href="/tour" className="block px-4 py-2 color1 hover:text-[#F66F4D] transition-all duration-300 font-medium text-2xl uppercase">
            Tour
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;