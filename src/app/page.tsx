'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import BookingForm from './components/BookingForm';
import AboutSection from './components/AboutSection';
import DestinationSection from './components/DestinationSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import ReviewSection from './components/ReviewSection';
import BlogsSection from './components/BlogsSection';
import BannerSection from './components/BannerSection';

const AOSWrapper = dynamic(() => import('./components/AOSWrapper'), { ssr: false });

export default function Home() {
  const [activeNav, setActiveNav] = useState(false);
  const [activeVideo, setActiveVideo] = useState('./Assets/Media/Videos/About-Video-1.mp4');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        duration: 800,
        offset: 150,
      });
    }
  }, []);

  const toggleNav = () => setActiveNav(!activeNav);
  const changeVideo = (src: string) => setActiveVideo(src);

  return (
    <>
      <AOSWrapper>
        <Head>
          <title>TravelBuddy - Nitin Chakraborty</title>
        </Head>

        <Header activeNav={activeNav} toggleNav={toggleNav} />
        <HomeSection />
        <BookingForm />
        <AboutSection activeVideo={activeVideo} changeVideo={changeVideo} />
        <DestinationSection />
        <ServicesSection />
        <GallerySection />
        <ReviewSection />
        <BlogsSection />
        <BannerSection />
        <Footer />
      </AOSWrapper>
    </>
  );
}
