import React, { useEffect, useState, Fragment } from 'react';
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
const CustomSlide = (props: Partial<CarouselProps>) => {
  const { images, imgList, ...otherProps } = props;
  return <h3>{imgList![1]}</h3>;
};
//
export const Carousel = React.memo(<PROPS extends CarouselProps>(props: PROPS) => {
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
  const { images, imgList } = props;

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
      <Slider {...option}>
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
function usememo(arg0: () => { somefilter: any; someotherfilter: any }, arg1: any[]) {
  throw new Error('Function not implemented.');
}
