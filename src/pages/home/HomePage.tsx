/*
 * @Date: 2023-05-30 13:22:58
 * @Description: Homepage
 */
import { FC } from 'react';
import {
  Container,
  MainLayout,
  CarouselBox,
  SearchlBox,
  HotGoodslBox,
  BestChoiceBox,
  TravelersChoiceBox,
} from './HomePage.module';
import { SearchPanel } from '@/components/serchPanel';
import { SwiperPage } from '@/components/Swiper';
import { VacationsBar } from '@/components/VacationsBar';
import { ProductCollection } from '@/components/productCollection';
import { TravelersChoice } from '@/components/TravelersChoice';
import { BestChoice } from '@/components/BestChoice';
import { useBannerGoods } from '@/api';
/**
 * HomePage
 */
export const HomePage: FC = () => {
  const { data: goodsList } = useBannerGoods();
  console.log(goodsList?.data, '001');

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
        <BestChoiceBox>
          <BestChoice />
        </BestChoiceBox>
        <TravelersChoiceBox>
          <TravelersChoice />
        </TravelersChoiceBox>
      </MainLayout>
    </Container>
  );
};
