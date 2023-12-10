'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const MainImage = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1023);
    };

    // Set initial value
    handleResize();

    // Add event listener to update on window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Image
      src={isDesktop ? '/image-web-3-desktop.jpg' : '/image-web-3-mobile.jpg'}
      alt='The Bright Future of Web 3.0'
      width={isDesktop ? 1460 : 686}
      height={600}
    />
  );
};

export default MainImage;
