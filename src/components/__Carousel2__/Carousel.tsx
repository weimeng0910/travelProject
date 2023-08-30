import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Container,
  CarouseImg,
  CarouseFont,
  CarouseTitle,
  CarouselDescription,
} from './Carousel.module';
import SideImage1 from '@/assets/images/2023-001.png';
import SideImage2 from '@/assets/images/2023-002.png';
import SideImage3 from '@/assets/images/2023-003.png';
import SideImage4 from '@/assets/images/2023-004.png';
import SideImage5 from '@/assets/images/2023-005.png';
import { nanoid } from 'nanoid';
/**
 * @date 2023/08/24
 * @description CarouselPage
 */
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

//创建图片列表数据
const imageList = [SideImage1, SideImage2, SideImage3, SideImage4, SideImage5];
type Item = {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
};
interface Settings {
  rows: number;
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
}
interface CarouselProps {
  images: Item[];
  imgList: string[];
}
//抽离子组件
//const CustomSlide = (props: any) => {
//  const { index, ...otherProps } = props;
//  console.log(index);

//  return (
//    <div {...otherProps}>
//      <div>{imageList[index]}</div>
//    </div>
//  );
//};
//
export const Carousel = React.memo(<PROPS extends CarouselProps>({ images, imgList }: PROPS) => {
  const [option, setOption] = useState({
    rows: 1,
    dots: true, //圆点显示（false隐藏）
    infinite: true, //布尔值，确定到达最后一项时轮播是否继续循环
    speed: 3000,
    slidesToShow: 3, //用于确定要保留在视图中的幻灯片数量的数字
    slidesToScroll: 1, //用于确定导航轮播时要移动的幻灯片数量的数字
    autoplay: true,
    autoplaySpeed: 1000,
    //variableWidth: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //arrows: false,
          initialSlide: 2,
        },
      },
    ],
  });
  const sliderRef = useRef(null);

  return (
    <Container>
      <Slider key={nanoid()} {...option} ref={sliderRef}>
        {images.map(item => (
          <CarouseFont key={item.id}>
            <CarouseImg src={imgList[item.id]} alt={item.alt} />
            <CarouseTitle>{item.title}</CarouseTitle>
            <CarouselDescription>{item.description}</CarouselDescription>
          </CarouseFont>
        ))}
      </Slider>
    </Container>
  );
});
