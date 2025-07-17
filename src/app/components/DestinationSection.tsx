'use client';

import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const DestinationSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-8 md:px-[9%]" id="destination">
      <div className="text-center mb-6 sm:mb-8">
        <span className="text-lg sm:text-xl text-[#29d9d5]">Our Destination</span>
        <h1 className="text-3xl sm:text-4xl text-white">Make Yours Destination</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden bg-[#222]"
            data-aos="fade-up"
            data-aos-delay={150 * (index + 1)}
          >
            <div className="h-56 sm:h-72 overflow-hidden">
              <img
                src={`/Assets/Media/Images/Destination-${item}.jpg`}
                alt={`Destination-${item}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl text-white">Tours & Travels</h3>
              <p className="py-2 sm:py-4 text-sm text-[#aaa] leading-6 sm:leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <a
                href="#"
                className="text-base sm:text-lg text-[#29d9d5] flex justify-center items-center gap-1"
              >
                Read More <FaAngleRight className="inline" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationSection;
