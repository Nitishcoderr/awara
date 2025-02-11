"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from 'next/image';
import { FaAward, FaRoute, FaUsers, FaCalendarAlt, FaMountain } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  // Counter component for animated numbers
  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const end = target;
        const duration = 2; // Animation duration in seconds
        const increment = end / (duration * 60); // 60 FPS

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, 1000 / 60); // 60 FPS

        return () => clearInterval(timer);
      }
    }, [isInView, target]);

    return <motion.span>{count}</motion.span>;
  };

  return (
    <section ref={ref} className="relative py-20 bgAccent">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-[#F66F4D] to-orange-200 rounded-full blur-3xl opacity-30"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="relative rounded-full overflow-hidden h-96 w-96 mx-auto border-8 border-white shadow-2xl"
              >
                <Image
                  src="/boy.png"
                  alt="Adventure Guide"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Stats Cards */}
              <div className="absolute hidden md:block -right-16 top-24 space-y-6">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3"
                >
                  <div className="bg-[#F66F4D]/10 p-3 rounded-xl">
                    <FaRoute className="text-2xl text-[#F66F4D] animate-float" />
                  </div>
                  <div className="pl-4">
                    <p className="text-2xl font-bold">
                      <Counter target={150} />+
                    </p>
                    <p className="text-gray-600">Destinations</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                  className="bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3"
                >
                  <div className="bg-[#F66F4D]/10 p-3 rounded-xl">
                    <FaUsers className="text-2xl text-[#F66F4D] animate-float" />
                  </div>
                  <div className="pl-4">
                    <p className="text-2xl font-bold">
                      <Counter target={50} />K+
                    </p>
                    <p className="text-gray-600">Customers</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-8 relative"
          >
            <h3 className="text-[#F66F4D] font-semibold uppercase tracking-wide">
              Our Experience
            </h3>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Our Stories Have <span className="text-[#F66F4D]">Adventures</span>
            </h2>

            <p className="text-lg text-gray-600">
              We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you!
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                { icon: <FaAward className="text-2xl text-[#F66F4D] animate-float" />, target: 25, label: "Awards Won" },
                { icon: <FaCalendarAlt className="text-2xl text-[#F66F4D] animate-float" />, target: 15, label: "Years Experience" },
                { icon: <FaMountain className="text-2xl text-[#F66F4D] animate-float" />, target: 500, label: "Tours Done" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white px-4 py-6 rounded-xl shadow-md flex flex-col items-center justify-center"
                >
                  {item.icon}
                  <p className="text-4xl font-bold mt-4">
                    <Counter target={item.target} />+
                  </p>
                  <p className="text-gray-600 mt-3">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : {}}
        className="absolute top-1/4 left-0 -translate-y-1/2"
      >
        <FaMountain className="text-9xl text-[#F66F4D] animate-float" />
      </motion.div>
    </section>
  );
};

export default Experience;