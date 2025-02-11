"use client";
import * as React from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaStar, FaQuoteLeft, FaQuoteRight, FaPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "The best travel experience we've ever had! From the breathtaking views to the expert guides, every moment was magical.",
    location: "Swiss Alps Adventure",
  },
  {
    name: "Mike Chen",
    rating: 4.8,
    text: "Exceptional service and attention to detail. Our family vacation to Bali was perfectly organized every moment was magical.",
    location: "Bali Family Trip",
  },
  {
    name: "Emma Wilson",
    rating: 5,
    text: "A truly transformative journey through the Sahara. The team made us feel safe and inspired throughout.",
    location: "Sahara Expedition",
  },
];

export function CustomerReviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" }, // Removed TypeScript type assertion
    [Autoplay({ delay: 5000 })]
  );

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative py-20 bgAccent overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-[#F66F4D]/10 rounded-full blur-xl" />
      <FaPlane className="absolute top-1/4 right-20 text-6xl text-[#F66F4D]/20 animate-float" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A customer said about us:
          </h2>
        </motion.div>

        <div className="embla overflow-hidden py-5" ref={emblaRef}>
          <div className="embla__container flex">
            {reviews.map((review, index) => (
              <div 
                className="embla__slide flex-[0_0_80%] min-w-0 pl-4 md:flex-[0_0_40%]" 
                key={index}
              >
                <Card className="border-none bg-white/50 backdrop-blur-lg shadow-xl rounded-3xl overflow-hidden">
                  <CardContent className="p-8 md:p-12 relative">
                    <FaQuoteLeft className="text-[#F66F4D]/30 text-6xl absolute top-4 left-4" />
                    <FaQuoteRight className="text-[#F66F4D]/30 text-6xl absolute bottom-4 right-4" />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-xl ${
                            i < Math.floor(review.rating)
                              ? "text-[#F66F4D]"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-[#F66F4D] font-bold">
                        {review.rating}
                      </span>
                    </div>

                    <p className="text-lg md:text-xl color1 mb-8">
                      {review.text}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#F66F4D] flex items-center justify-center text-white font-bold">
                        {review.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{review.name}</h4>
                        <p className="text-[#F66F4D]">{review.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-[#F66F4D] text-[#F66F4D] hover:bg-[#F66F4D]/10"
            onClick={scrollPrev}
          >
            ←
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-[#F66F4D] text-[#F66F4D] hover:bg-[#F66F4D]/10"
            onClick={scrollNext}
          >
            →
          </Button>
        </div>
      </div>
    </section>
  );
}