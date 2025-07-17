'use client';

import React from 'react';
import { FaClock, FaUser } from 'react-icons/fa';

const BlogsSection: React.FC = () => {
  const dates: string[] = ['17th April, 2021', '17th April, 2020', '17th April, 2019'];

  return (
    <section className="px-4 sm:px-8 md:px-[9%]" id="blogs">
      <div className="text-center mb-8">
        <span className="text-lg sm:text-xl text-[#29d9d5]">Blogs & Posts</span>
        <h1 className="text-3xl sm:text-4xl text-white">Our Untold Stories</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item: number, index: number) => (
          <div
            key={index}
            className="rounded-lg bg-[#222] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={150 * (index + 1)}
          >
            <div className="h-56 sm:h-64 overflow-hidden">
              <img
                src={`/Assets/Media/Images/Blog-${item}.jpg`}
                alt={`Blog-${item}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 sm:p-8">
              <a
                href="#"
                className="text-lg sm:text-xl text-white hover:text-[#29d9d5] block"
              >
                Life is a Journey, not a Destination!
              </a>
              <p className="py-3 text-sm sm:text-base text-[#aaa] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, natus!
              </p>
              <div className="pt-3 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
                <a href="#" className="text-sm text-[#aaa] hover:text-[#29d9d5]">
                  <FaClock className="inline mr-1 text-[#29d9d5]" />
                  {dates[index]}
                </a>
                <a href="#" className="text-sm text-[#aaa] hover:text-[#29d9d5]">
                  <FaUser className="inline mr-1 text-[#29d9d5]" />
                  By Admin
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
