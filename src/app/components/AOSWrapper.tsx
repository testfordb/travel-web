'use client';

import { useEffect, ReactNode } from 'react';
import 'aos/dist/aos.css';

interface AOSWrapperProps {
  children: ReactNode;
}

const AOSWrapper: React.FC<AOSWrapperProps> = ({ children }) => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        offset: 150,
        once: true,
      });
    };

    if (typeof window !== 'undefined') {
      initAOS();
    }
  }, []);

  return <div suppressHydrationWarning>{children}</div>;
};

export default AOSWrapper;
