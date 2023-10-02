import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import {
  Container,
  CarouselDescription,
  CarouseTitle,
  CarouseImg,
  MySwiper,
  CarouseRunden,
  CarouselMoney,
} from './SwiperPage.module';
import { IGoods } from '@/types/goods';
/**
 * @date 2023/08/30
 * @description SwiperPage
 */
SwiperCore.use([Autoplay, Pagination]);

interface SwiperProps {
  dataList: Partial<IGoods>[];
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
    controller: {
      inverse: true,
    },
  });
  return (
    <Container>
      <MySwiper {...option}>
        {dataList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <CarouseImg src={item.pic_url} />
              <CarouseTitle>{item.name}</CarouseTitle>
              <CarouselDescription>
                <CarouseRunden />
                <CarouseTitle>
                  {item.counter_price}
                  <i>$</i>
                </CarouseTitle>

                <CarouseRunden />

                <CarouseTitle>
                  {item.retail_price}
                  <CarouselMoney>reviews</CarouselMoney>
                </CarouseTitle>
              </CarouselDescription>
            </SwiperSlide>
          );
        })}
      </MySwiper>
    </Container>
  );
};
