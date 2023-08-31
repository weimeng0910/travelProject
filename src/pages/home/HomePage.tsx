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

/**
 * @date 2023/05/30
 * @description Homepage
 */

//创建图片列表数据
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
          <SwiperPage dataList={Images} />
        </CarouselBox>
      </MainLayout>
    </Container>
  );
};
