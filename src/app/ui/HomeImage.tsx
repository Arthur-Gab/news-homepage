'use client'

import Image from 'next/image';
import { useMediaQuery } from '../hooks/useMediaQuery';

const HomeImage = () => {
  const isDesktop = useMediaQuery('(min-width: 1023.98px)')

  return (
    <Image
      src={isDesktop ? '/image-web-3-desktop.jpg' : '/image-web-3-mobile.jpg'}
      alt='The Bright Future of Web 3.0'
      width={isDesktop ? 1460 : 686}
      height={600}
    />
  );
};
export default HomeImage;
