import React from 'react';
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

/**
 * @date 2023/08/24
 * @description CarouselPage
 */
type Item = {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
};
interface CarouselProps {
  images: Item[];
  imgList: string[];
  settings: {
    rows: number;
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
  };
}
//Carouselpage
export const Carousel = React.memo(<PROPS extends CarouselProps>(props: PROPS) => {
  const { images, settings, imgList } = props;
  //const settings = {
  //  rows: 1,
  //  dots: true, //圆点显示（false隐藏）
  //  infinite: true, //布尔值，确定到达最后一项时轮播是否继续循环
  //  speed: 3000,
  //  slidesToShow: 3, //用于确定要保留在视图中的幻灯片数量的数字
  //  slidesToScroll: 1, //用于确定导航轮播时要移动的幻灯片数量的数字
  //  autoplay: true,
  //  autoplaySpeed: 1000,
  //  //variableWidth: true,
  //  responsive: [
  //    {
  //      breakpoint: 600,
  //      settings: {
  //        slidesToShow: 1,
  //        slidesToScroll: 1,
  //        //arrows: false,
  //        initialSlide: 2,
  //      },
  //    },
  //  ],
  //};
  return (
    <Container>
      <Slider {...settings}>
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
