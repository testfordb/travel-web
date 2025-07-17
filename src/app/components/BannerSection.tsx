'use client';

import React from 'react';

const BannerSection: React.FC = () => {
  return (
    <div
      className="bg-[linear-gradient(rgba(17,17,17,0.7),rgba(17,17,17,0.7)),url(/Assets/Media/Images/Banner-Background.jpg)] bg-cover bg-center py-12 px-4 sm:px-8 text-center bg-fixed"
    >
      <div
        className="content"
        data-aos="zoom-in-up"
        data-aos-delay="300"
      >
        <span className="text-lg sm:text-xl text-[#29d9d5]">Start Your Adventures</span>
        <h3 className="text-3xl sm:text-4xl text-white my-4">Let's Explore This World</h3>
        <p className="max-w-2xl sm:max-w-3xl mx-auto text-sm sm:text-base text-[#aaa] leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatum praesentium amet quibusdam quam officia suscipit odio.
        </p>
        <a
          href="#book-form"
          className="mt-4 inline-block px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg text-[#29d9d5] border-2 border-[#29d9d5] rounded-full hover:bg-[#29d9d5] hover:text-[#111] transition-all"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default BannerSection;
