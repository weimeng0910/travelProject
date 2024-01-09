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
import { SearchPage } from '@/components/serchPanel';
import { SwiperPage } from '@/components/Swiper';
import { VacationsBar } from '@/components/VacationsBar';
import { ProductCollection } from '@/components/productCollection';
import { TravelersChoice } from '@/components/TravelersChoice';
import { BestChoice } from '@/components/BestChoice';
import { useGoods } from '@/api';

export const HomePage: FC = () => {
  const { data: goodsList } = useGoods();
  console.log(goodsList?.data.banner, '00100');
  if (!goodsList) {
    return null;
  }
  return (
    <Container>
      <MainLayout>
        <SearchlBox>
          <SearchPage />
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
          <TravelersChoice GoodsData={goodsList?.data.floorGoodsList || {}} />
        </TravelersChoiceBox>
      </MainLayout>
    </Container>
  );
};
