import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';
import {
  Container,
  CarouselDescription,
  CarouseTitle,
  CarouseImg,
  MaskingLeft,
  MySwiper,
} from './SwiperPage.module';
import SideImage1 from '@/assets/images/2023-001.png';
import SideImage2 from '@/assets/images/2023-002.png';
import SideImage3 from '@/assets/images/2023-003.png';
import SideImage4 from '@/assets/images/2023-004.png';
import SideImage5 from '@/assets/images/2023-005.png';
/**
 * @date 2023/08/30
 * @description SwiperPage
 */
SwiperCore.use([Autoplay]);
interface SwiperType {
  //定义水平还是垂直
  direction?: 'horizontal' | 'vertical'; // 是否纵向
  speed?: number; // 自动播放间隔
  width: string;
  height: string;
  urls: string[]; // 图片数组
}
//轮播组件
export const SwiperPage: FC = () => {
  const partnerLogo: Array<string> = [SideImage1, SideImage2, SideImage3, SideImage4, SideImage5];
  const Images = [
    {
      id: 1,
      src: 'images/2023-001.png',
      alt: 'Image 1',
      title: 'Lamborghini Huracan Performante',
      description: 'The Huracán Performante has reworked the concept of super sports cars .',
    },
    {
      id: 2,
      src: 'images/2023-002.png',
      alt: 'Image 2 ',
      title: 'Porsche 911 Turbo S',
      description:
        'This Turbo S variant comes with an engine putting out 641 bhp @ 6750 rpm and 800 Nm .',
    },
    {
      id: 3,
      src: 'images/2023-003.png',
      alt: 'Image 3',
      title: 'Ford Mustang',
      description: 'For offroad lovers. Super fast, Super Comfortable.',
    },
    {
      id: 4,
      src: 'images/2023-004.png',
      alt: 'Image 4',
      title: 'Lamborghini Aventador SV',
      description:
        'Aventador SV provide thrills unlike anything that has ever been experienced before.',
    },
  ];
  //当前索引，定义activeIndex这个state，用来标记当前展示的节点
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Container>
      <MySwiper
        spaceBetween={50} //页面间间隔
        slidesPerView={3} //预览一个条目数；
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }} //显示分页器（点点点），并可点击；
        loop
      >
        {Images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <CarouseImg src={partnerLogo[item.id]} alt={item.alt} />
              <CarouseTitle>{item.title}</CarouseTitle>
              <CarouselDescription>{item.description}</CarouselDescription>
            </SwiperSlide>
          );
        })}
      </MySwiper>
    </Container>
  );
};
