"use client";
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function ContactForm() {
  return (
    <section className="relative py-20 bgAccent overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[#F66F4D]/10 rounded-full blur-xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-[#F66F4D]/10 rounded-full blur-xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Image Section */}
          <div className="relative h-full min-h-[500px] hidden md:block">
            <Image
              src="/travel-form.png"
              alt="Travel Adventure"
              width={1000}
              height={1000}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F66F4D]/30 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white z-10">
              <h3 className="text-4xl font-bold mb-2">Start Your Journey</h3>
              <p className="text-lg">Let's craft your perfect adventure together</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-12 relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-10 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F66F4D] rounded-2xl mb-6">
                  <FaPaperPlane className="text-3xl text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-2">Plan Your Trip</h2>
                <p className="text-gray-600">Get personalized travel consultation</p>
              </div>

              <form className="space-y-6">
                <div className="relative">
                  <FaUser className="absolute top-4 left-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-[#F66F4D] focus:ring-2 focus:ring-[#F66F4D]/20 transition-all"
                  />
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-[#F66F4D] focus:ring-2 focus:ring-[#F66F4D]/20 transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute top-4 left-4 text-gray-400" />
                    <select className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-[#F66F4D] focus:ring-2 focus:ring-[#F66F4D]/20 appearance-none transition-all">
                      <option>Destination</option>
                      <option>Europe Tour</option>
                      <option>Asian Adventure</option>
                      <option>Tropical Paradise</option>
                    </select>
                  </div>

                  <div className="relative">
                    <FaCalendarAlt className="absolute top-4 left-4 text-gray-400" />
                    <input
                      type="date"
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-[#F66F4D] focus:ring-2 focus:ring-[#F66F4D]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Your Travel Requirements"
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-[#F66F4D] focus:ring-2 focus:ring-[#F66F4D]/20 transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F66F4D] text-white py-4 rounded-lg font-semibold hover:bg-[#E55C3A] transition-all flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Submit Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Plane */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-[#F66F4D]/20 text-6xl"
        animate={{ x: [-100, 1000], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <FaPaperPlane className="rotate-45" />
      </motion.div>
    </section>
  );
}