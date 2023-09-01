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

import { useBannerGoods } from '@/utils'; //data
/**
 * @date 2023/05/30
 * @description Homepage
 */

export const HomePage: FC = () => {
  const { data: bannerList } = useBannerGoods();
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
          <SwiperPage dataList={bannerList || []} />
        </CarouselBox>
      </MainLayout>
    </Container>
  );
};
