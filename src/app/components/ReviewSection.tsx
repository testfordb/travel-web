'use client';

import React from 'react';

interface Reviewer {
  name: string;
  role: string;
}

const ReviewSection: React.FC = () => {
  const reviewers: Reviewer[] = [
    { name: 'John Doe', role: 'Developer' },
    { name: 'Jane Roe', role: 'Designer' },
    { name: 'John Roe', role: 'Manager' },
    { name: 'Jane Doe', role: 'Writer' },
  ];

  return (
    <section className="flex flex-wrap gap-6 sm:gap-8 px-4 sm:px-6 md:px-[9%]">
      <div className="flex-1 min-w-full md:min-w-[42rem]" data-aos="fade-right" data-aos-delay="300">
        <span className="text-lg sm:text-xl text-[#29d9d5]">Testimonials</span>
        <h3 className="text-2xl sm:text-3xl text-white mt-2">Good News From Our Clients</h3>
        <p className="py-3 sm:py-4 text-sm sm:text-base text-[#aaa] leading-6 sm:leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium corporis fugiat quae unde perspiciatis similique ab modi enim consequatur aperiam cumque distinctio facilis sit, debitis possimus asperiores non harum.
        </p>
      </div>
      <div className="flex-1 min-w-full md:min-w-[42rem] flex flex-wrap gap-4 sm:gap-6" data-aos="fade-left" data-aos-delay="600">
        {reviewers.map((review: Reviewer, index: number) => (
          <div
            key={index}
            className="flex-1 min-w-full sm:min-w-[20rem] rounded-lg p-4 sm:p-6 bg-[#222] border border-[#111] hover:border-[#29d9d5]"
          >
            <p className="text-sm sm:text-base text-[#aaa] leading-6 sm:leading-7 pb-2 sm:pb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ratione.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src={`/Assets/Media/Images/Testimonial-${index + 1}.png`}
                alt={`Testimonial-${index + 1}`}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
              />
              <div className="info">
                <h3 className="text-base sm:text-lg text-white">{review.name}</h3>
                <span className="text-xs sm:text-sm text-[#aaa]">{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
