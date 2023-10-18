import { FC } from 'react';
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
import { Card } from '@/components/card';
import { useGoods } from '@/utils'; //data
/*
 * @Date: 2023-05-30 13:22:58
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-13 09:41:16
 * @FilePath: /travelProject/src/pages/home/HomePage.tsx
 * @Description: Homepage
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
        <DateSearchBox>
          <Card />
        </DateSearchBox>
      </MainLayout>
    </Container>
  );
};
