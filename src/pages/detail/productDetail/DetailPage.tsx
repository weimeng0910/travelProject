/*
 * @Date: 2023-06-13 14:21:30
 * @Description: DetailPage
 */
import React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './DatailPage.module';
import { ErrorBox } from '@/common/hooks/lib';
import { SearchPanel } from '@/components/serchPanel';
import { AdvertisingBanner } from '@/components/AdvertisingBanner';
import { ProductDetail } from './ProductDetail';
import { useGoodsDetail } from '@/api/goods';

type MatchParams = {
  touristRouteId: string;
};

export const DetailPage: React.FC = () => {
  const { touristRouteId } = useParams<MatchParams>();
  const { isLoading, isError, data: list } = useGoodsDetail(Number(touristRouteId!));
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError || !list) {
    return <ErrorBox error={isError || 'Failed to fetch data.'} />;
  }
  return (
    <Container>
      <SearchPanel />
      <ProductDetail goodsData={list} />
      <AdvertisingBanner />
    </Container>
  );
};
