'use client';

import React from 'react';
import { FiGlobe, FiHeadphones } from 'react-icons/fi';
import { FaHiking, FaUtensils, FaHotel, FaWallet } from 'react-icons/fa';

interface Service {
  icon: JSX.Element;
  title: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    { icon: <FiGlobe className="text-5xl sm:text-6xl" />, title: "Worldwide" },
    { icon: <FaHiking className="text-5xl sm:text-6xl" />, title: "Adventures" },
    { icon: <FaUtensils className="text-5xl sm:text-6xl" />, title: "Foods & Drinks" },
    { icon: <FaHotel className="text-5xl sm:text-6xl" />, title: "Affordable Hotels" },
    { icon: <FaWallet className="text-5xl sm:text-6xl" />, title: "Affordable Price" },
    { icon: <FiHeadphones className="text-5xl sm:text-6xl" />, title: "24*7 Support" },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-[9%]" id="services">
      <div className="text-center mb-8 sm:mb-12">
        <span className="text-xl sm:text-2xl text-[#29d9d5] block mb-2">Our Services</span>
        <h1 className="text-3xl sm:text-5xl text-white font-bold">Countless Experiences</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map((service: Service, index: number) => (
          <div
            key={index}
            className="bg-[#222] rounded-xl p-4 sm:p-6 text-center border border-[#111] hover:border-[#29d9d5] transition-all duration-300 flex flex-col items-center"
            data-aos="zoom-in-up"
            data-aos-delay={150 * (index + 1)}
          >
            <div className="mb-3 sm:mb-6 text-[#29d9d5]">{service.icon}</div>
            <h3 className="text-xl sm:text-3xl text-white mb-2 sm:mb-4 font-medium">{service.title}</h3>
            <p className="text-sm sm:text-base text-[#aaa] leading-6 sm:leading-7">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, cumque.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
