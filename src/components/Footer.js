"use client";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white pt-20 pb-12 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F66F4D]/20 to-transparent" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#F66F4D]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#F66F4D]">TravelEase</h3>
            <p className="text-gray-400">
              Crafting unforgettable journeys since 2010. Your adventure starts here.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#F66F4D] transition-colors">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#F66F4D] transition-colors">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#F66F4D] transition-colors">
                <FaInstagram size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#F66F4D] transition-colors">
                <FaYoutube size={24} />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-gray-400 hover:text-[#F66F4D] transition-colors">About Us</Link>
              <Link href="/tours" className="text-gray-400 hover:text-[#F66F4D] transition-colors">Tours</Link>
              <Link href="/destinations" className="text-gray-400 hover:text-[#F66F4D] transition-colors">Destinations</Link>
              <Link href="/blog" className="text-gray-400 hover:text-[#F66F4D] transition-colors">Travel Blog</Link>
              <Link href="/contact" className="text-gray-400 hover:text-[#F66F4D] transition-colors">Contact</Link>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-[#F66F4D]" />
                <span className="text-gray-400">123 Adventure Street, Travel City, TC 45678</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-[#F66F4D]" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-[#F66F4D]" />
                <span className="text-gray-400">info@travelease.com</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <p className="text-gray-400">Subscribe for exclusive travel deals and updates!</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#F66F4D] focus:ring-2 focus:ring-[#F66F4D]/20 transition-all"
              />
              <button
                type="submit"
                className="bg-[#F66F4D] text-white py-3 rounded-lg font-semibold hover:bg-[#E55C3A] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} TravelEase. All rights reserved. | 
            <Link href="/privacy" className="hover:text-[#F66F4D] transition-colors mx-2">Privacy Policy</Link> 
            <Link href="/terms" className="hover:text-[#F66F4D] transition-colors mx-2">Terms of Service</Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}