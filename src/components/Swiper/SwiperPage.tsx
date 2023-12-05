/*
 * @Date: 2023/08/30 16:35:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-01 15:37:26
 * @FilePath: /travelProject/src/components/Swiper/SwiperPage.tsx
 * @Description: SwiperPage
 */
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

SwiperCore.use([Autoplay, Pagination]);

interface SwiperProps {
  dataList: Partial<IGoods>[];
}

export const SwiperPage = <PROPS extends SwiperProps>({ dataList }: PROPS) => {
  const [option] = useState({
    spaceBetween: 20,
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
            <SwiperSlide style={{ margin: '0' }} key={index}>
              <CarouseImg src={item.pic_url} />
              <CarouseTitle>{item.name}</CarouseTitle>
              <CarouselDescription>
                <div>
                  <CarouseRunden />
                </div>

                <div>
                  {item.counter_price}
                  <CarouselMoney>$</CarouselMoney>
                </div>
                <div>
                  <CarouseRunden />
                </div>

                <div>
                  {item.retail_price}
                  <CarouselMoney>reviews</CarouselMoney>
                </div>
              </CarouselDescription>
            </SwiperSlide>
          );
        })}
      </MySwiper>
    </Container>
  );
};
