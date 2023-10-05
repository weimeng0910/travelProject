import React, { FC, useEffect, useMemo } from 'react';
import {
  Container,
  MenuLayout,
  MainLayout,
  WordBox,
  CarouselBox,
  InnerH3,
  SearchlBox,
  HotGoodslBox,
  DateSearchBox,
} from './HomePage.module';
import { SideMenu } from '@/components/sideMenu';
import { SearchPanel } from '@/components/serchPanel';
import { SwiperPage } from '@/components/Swiper';
import { ProductCollection } from '@/components/productCollection';
import { DateSearch } from '@/components/dateSearch';
import { useGoods } from '@/utils'; //data
/**
 * @date 2023/05/30
 * @description Homepage
 */

export const HomePage: FC = () => {
  const { data: goodsList } = useGoods();

  return (
    <Container>
      <MenuLayout>
        <SideMenu />
        <WordBox>
          <InnerH3>Here to help keep you on the move</InnerH3>
        </WordBox>
      </MenuLayout>

      <MainLayout>
        <SearchlBox>
          <SearchPanel />
        </SearchlBox>

        <CarouselBox>
          <SwiperPage dataList={goodsList?.data.banner || []} />
        </CarouselBox>
        <HotGoodslBox>
          <ProductCollection hotGoodsData={goodsList?.data.hotGoodsList || []} />
        </HotGoodslBox>
        <DateSearchBox>
          <DateSearch />
        </DateSearchBox>
      </MainLayout>
    </Container>
  );
};
