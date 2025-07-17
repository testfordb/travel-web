'use client';

import React from 'react';

interface AboutSectionProps {
  activeVideo: string;
  changeVideo: (src: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ activeVideo, changeVideo }) => {
  const videos: string[] = [
    './Assets/Media/Videos/About-Video-1.mp4',
    './Assets/Media/Videos/About-Video-2.mp4',
    './Assets/Media/Videos/About-Video-3.mp4'
  ];

  return (
    <section
      className="flex flex-col lg:flex-row items-center gap-8 mt-20 px-4 sm:px-8 md:px-12 lg:px-[9%]"
      id="about"
    >
      <div
        className="flex-1 w-full"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <video
          src={activeVideo}
          muted
          autoPlay
          loop
          className="w-full rounded-lg"
        ></video>
        <div className="text-center py-6 flex justify-center flex-wrap gap-3">
          {videos.map((src, index) => (
            <span
              key={index}
              className={`inline-block h-4 w-4 sm:h-5 sm:w-5 rounded-full cursor-pointer transition-all
                ${activeVideo === src ? 'bg-[#29d9d5] scale-125' : 'bg-white hover:bg-[#29d9d5]'}`}
              onClick={() => changeVideo(src)}
            ></span>
          ))}
        </div>
      </div>

      <div
        className="flex-1 w-full text-center lg:text-left"
        data-aos="fade-left"
        data-aos-delay="600"
      >
        <span className="text-lg sm:text-xl text-[#29d9d5]">Why Choose Us?</span>
        <h3 className="text-3xl sm:text-4xl text-white mt-2">Best Experience</h3>
        <p className="py-4 text-sm sm:text-base text-[#aaa] leading-relaxed">
          Our Dedicated Travel Team works round the clock to design the best travel
          experiences. The skilled team spends time ideating tour packages that guarantee an
          unforgettable journey.
        </p>
        <a
          href="#"
          className="inline-block px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg text-[#29d9d5] border-2 border-[#29d9d5] rounded-full hover:bg-[#29d9d5] hover:text-[#111] transition-all mt-4"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
