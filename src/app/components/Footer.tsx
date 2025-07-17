'use client';

import React from 'react';
import {
  FaGlobeAsia,
  FaAngleRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMap,
  FaPhone,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const quickLinks: string[] = ['Home', 'About', 'Destinations', 'Services', 'Gallery', 'Blogs'];
  const contactInfo: [React.ElementType, string][] = [
    [FaMap, 'Bansberia, Hooghly, West Bengal, India.'],
    [FaPhone, '+91-7003384387'],
    [FaEnvelope, 'nitin.chakraborty13@gmail.com'],
    [FaClock, '07:00 A.M. - 07:00 P.M.'],
  ];
  const socialIcons: React.ElementType[] = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedin];

  return (
    <footer className="px-4 sm:px-8 md:px-[9%] py-8 sm:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        
        <div className="text-center sm:text-left" data-aos="fade-up" data-aos-delay="150">
          <FaGlobeAsia className="text-[#29d9d5] text-3xl sm:text-4xl mx-auto sm:mx-0 mb-3" />
          <a href="#" className="text-xl sm:text-2xl text-white font-bold block mb-4">
            TravelBuddy
          </a>
          <p className="text-sm sm:text-base text-[#aaa] leading-6 mb-4">
            Personalised, well-crafted tour packages for best experiences!
          </p>
          <div className="flex justify-center sm:justify-start gap-3">
            {socialIcons.map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full border border-[#29d9d5] text-[#29d9d5] hover:bg-[#29d9d5] hover:text-[#111] transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        
        <div className="text-center sm:text-left" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg sm:text-2xl text-white mb-4 sm:mb-6">Quick Links</h3>
          <div className="flex flex-col gap-2 sm:gap-3">
            {quickLinks.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="flex items-center text-sm sm:text-lg text-[#aaa] hover:text-[#29d9d5]"
              >
                <FaAngleRight className="text-[#29d9d5] mr-2" /> {item}
              </a>
            ))}
          </div>
        </div>

        
        <div className="text-center sm:text-left" data-aos="fade-up" data-aos-delay="450">
          <h3 className="text-lg sm:text-2xl text-white mb-4 sm:mb-6">Contact Information</h3>
          <div className="flex flex-col gap-2 sm:gap-3">
            {contactInfo.map(([Icon, text], index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3 text-[#aaa] text-sm sm:text-base">
                <Icon className="text-[#29d9d5]" /> {text}
              </div>
            ))}
          </div>
        </div>

        
        <div className="text-center sm:text-left" data-aos="fade-up" data-aos-delay="600">
          <h3 className="text-lg sm:text-2xl text-white mb-4 sm:mb-6">Newsletter</h3>
          <p className="text-sm sm:text-base text-[#aaa] mb-4">Subscribe for latest updates!</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-full border border-[#29d9d5] bg-transparent text-sm sm:text-base text-[#aaa] px-4 py-2 sm:py-3"
            />
            <button
              type="submit"
              className="rounded-full border-2 border-[#29d9d5] text-[#29d9d5] px-4 py-2 sm:px-6 sm:py-3 hover:bg-[#29d9d5] hover:text-[#111] transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 text-center text-sm sm:text-base text-[#aaa]">
        Copyright &copy; <span className="text-[#29d9d5]">TravelBuddy</span> - All Rights Reserved!
      </div>
    </footer>
  );
};

export default Footer;
