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

import { ErrorBox } from '@/common/hooks/lib';
import { SearchPage } from '@/components/serchPanel';
import { SwiperPage } from '@/components/Swiper';
import { VacationsBar } from '@/components/VacationsBar';
import { ProductCollection } from '@/components/productCollection';
import { TravelersChoice } from '@/components/TravelersChoice';
import { BestChoice } from '@/components/BestChoice';
import { useGoods } from '@/api';

export const HomePage: FC = () => {
  const { data: goodsList, isLoading, isError } = useGoods();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !goodsList) {
    return <ErrorBox error={isError || 'Failed to fetch data.'} />;
  }

  return (
    <Container>
      <MainLayout>
        <SearchlBox>
          <SearchPage />
        </SearchlBox>
        <CarouselBox>
          <SwiperPage
            dataList={Array.isArray(goodsList?.data?.floorGoodsList) ? goodsList?.data?.banner : []}
          />
        </CarouselBox>
        <div>
          <VacationsBar />
        </div>
        <HotGoodslBox>
          <ProductCollection
            hotGoodsData={
              Array.isArray(goodsList?.data?.floorGoodsList) ? goodsList?.data?.hotGoodsList : []
            }
          />
        </HotGoodslBox>
        <BestChoiceBox>
          <BestChoice />
        </BestChoiceBox>
        <TravelersChoiceBox>
          <TravelersChoice
            GoodsData={
              Array.isArray(goodsList?.data?.floorGoodsList) ? goodsList?.data?.floorGoodsList : []
            }
          />
        </TravelersChoiceBox>
      </MainLayout>
    </Container>
  );
};
