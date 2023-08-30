import React, { useState, useEffect } from 'react';
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
import Images from './temp';
import carouselImage1 from '@/assets/images/2023-001.png';
import carouselImage2 from '@/assets/images/2023-002.png';
import carouselImage3 from '@/assets/images/2023-003.png';
import carouselImage4 from '@/assets/images/2023-004.png';
import carouselImage5 from '@/assets/images/2023-005.png';
/**
 * @date 2023/08/24
 * @description CarouselPage
 */

export const Carousel: React.FC = React.memo(() => {
  const [option, setOption] = useState(Images);
  //创建图像列表数据
  const imgList = [carouselImage1, carouselImage2, carouselImage3, carouselImage4, carouselImage5];
  const settings = {
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
  };
  return (
    <Container>
      <Slider {...settings}>
        {option.map(item => (
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
