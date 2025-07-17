'use client';

import React from 'react';

const BookingForm: React.FC = () => {
  return (
    <section
      className="w-[90%] sm:w-[80%] mx-auto -mt-12 sm:-mt-20 bg-[#222] rounded-lg shadow-lg p-4 sm:p-6 md:p-8"
      id="book-form"
    >
      <form
        className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4"
      >
        <div
          className="flex-1 min-w-[180px]"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <span className="text-sm text-[#aaa]">Where To?</span>
          <input
            type="text"
            placeholder="Place Name"
            className="w-full p-3 rounded-full border border-[#29d9d5] text-base text-[#aaa] bg-transparent mt-2"
          />
        </div>

        <div
          className="flex-1 min-w-[180px]"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <span className="text-sm text-[#aaa]">When?</span>
          <input
            type="date"
            className="w-full p-3 rounded-full border border-[#29d9d5] text-base text-[#aaa] bg-transparent mt-2"
          />
        </div>

        <div
          className="flex-1 min-w-[150px]"
          data-aos="zoom-in"
          data-aos-delay="450"
        >
          <span className="text-sm text-[#aaa]">How Many?</span>
          <input
            type="number"
            placeholder="Travelers"
            className="w-full p-3 rounded-full border border-[#29d9d5] text-base text-[#aaa] bg-transparent mt-2"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:flex-1 px-6 py-3 text-lg text-[#29d9d5] border-2 border-[#29d9d5] rounded-full hover:bg-[#29d9d5] hover:text-[#111] transition-all"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          Find Now
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
