import React from 'react';
import { Image } from 'antd';
import { AntCarousel } from '@/components/Carousel/Carousel.module';
import carouselImage1 from '@/assets/images/2023-001.png';
import carouselImage2 from '@/assets/images/2023-002.png';
import carouselImage3 from '@/assets/images/2023-003.png';
import carouselImage4 from '@/assets/images/2023-004.png';
/**
 * @date 2023/08/24
 * @description CarouselPage
 */
export const Carousel: React.FC = React.memo(() => {
  return (
    <AntCarousel autoplay>
      <Image src={carouselImage1} />
      <Image src={carouselImage2} />
      <Image src={carouselImage3} />
      <Image src={carouselImage4} />
    </AntCarousel>
  );
});
