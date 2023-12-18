/*
 * @Date: 2023-06-13 14:21:30
 * @Description: DetailPage
 */
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useUrlQueryParam } from '@/common/hooks/useUrlQueryParam';

type MatchParams = {
  touristRouteId: string;
};

export const DetailPage: React.FC = () => {
  useUrlQueryParam(['redem']);

  return <div>DetailPage</div>;
};
