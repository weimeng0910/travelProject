import React, { FC, useEffect, useMemo } from 'react';
import {
  Container,
  MenuLayout,
  MainLayout,
  FontBox,
  CarouselBox,
  InnerH3,
} from './HomePage.module';

import { SideMenu } from '@/components/sideMenu';
import { SearchPanel } from '@/components/serchPanel';
import { SwiperPage } from '@/components/Swiper';
import SideImage1 from '@/assets/images/2023-001.png';
import SideImage2 from '@/assets/images/2023-002.png';
import SideImage3 from '@/assets/images/2023-003.png';
import SideImage4 from '@/assets/images/2023-004.png';
import SideImage5 from '@/assets/images/2023-005.png';

/**
 * @date 2023/05/30
 * @description Homepage
 */

//创建图片列表数据
const imageList = [SideImage1, SideImage2, SideImage3, SideImage4, SideImage5];
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
//  //responsive: [
//  //  {
//  //    breakpoint: 600,
//  //    settings: {
//  //      slidesToShow: 1,
//  //      slidesToScroll: 1,
//  //      //arrows: false,
//  //      initialSlide: 2,
//  //    },
//  //  },
//  //],
//};
export const HomePage: FC = () => {
  return (
    <Container>
      <MenuLayout>
        <SideMenu />
        <FontBox>
          <InnerH3>Here to help keep you on the move</InnerH3>
        </FontBox>
      </MenuLayout>

      <MainLayout>
        <SearchPanel />
        <CarouselBox>
          <SwiperPage />
        </CarouselBox>
      </MainLayout>
    </Container>
  );
};
