/*
 * @Date: 2023-05-30 13:22:58
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-16 11:47:02
 * @FilePath: /travelProject/src/pages/home/HomePage.tsx
 * @Description: Homepage
 */
import { FC } from 'react';
import {
  Container,
  MainLayout,
  CarouselBox,
  SearchlBox,
  HotGoodslBox,
  DateSearchBox,
  RestaurantsBox,
} from './HomePage.module';
import { SearchPanel } from '@/components/serchPanel';
import { SwiperPage } from '@/components/Swiper';
import { VacationsBar } from '@/components/VacationsBar';
import { ProductCollection } from '@/components/productCollection';
import { DateSearch } from '@/components/dateSearch';
import { BestRestaurants } from '@/components/BestRestaurants';
import TabsBasicLayou from '@/components/Tabs';
import { useGoods } from '@/utils'; //data
/**
 * HomePage
 */
export const HomePage: FC = () => {
  const { data: goodsList } = useGoods();

  return (
    <Container>
      <MainLayout>
        <SearchlBox>
          <SearchPanel />
        </SearchlBox>
        <CarouselBox>
          <SwiperPage dataList={goodsList?.data.banner || []} />
        </CarouselBox>
        <div>
          <VacationsBar />
        </div>
        <HotGoodslBox>
          <ProductCollection hotGoodsData={goodsList?.data.hotGoodsList || []} />
        </HotGoodslBox>
        <DateSearchBox>
          {/*<DateSearch />*/}
          <TabsBasicLayou />
        </DateSearchBox>
        {/*<div>
          <TabsBasicLayou />
        </div>*/}
      </MainLayout>
    </Container>
  );
};
