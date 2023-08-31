import { FC, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

import {
  Container,
  CarouselDescription,
  CarouseTitle,
  CarouseImg,
  MySwiper,
} from './SwiperPage.module';

/**
 * @date 2023/08/30
 * @description SwiperPage
 */
SwiperCore.use([Autoplay, Pagination]);
type Item = {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
};
interface SwiperProps {
  dataList: Item[];
}
//轮播组件
export const SwiperPage = <PROPS extends SwiperProps>({ dataList }: PROPS) => {
  const [option] = useState({
    spaceBetween: 20, //页面间间隔
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: { clickable: true },
  });
  return (
    <Container>
      <MySwiper {...option}>
        {dataList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <CarouseImg src={item.src} alt={item.alt} />
              <CarouseTitle>{item.title}</CarouseTitle>
              <CarouselDescription>{item.description}</CarouselDescription>
            </SwiperSlide>
          );
        })}
      </MySwiper>
    </Container>
  );
};
