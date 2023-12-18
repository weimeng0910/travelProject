/*
 * @Date: 2023-06-13 14:21:30
 * @Description: DetailList
 */
import React from 'react';
//import { useProductParams } from '../util';
import { useUrlQueryParam } from '@/common/hooks/useUrlQueryParam';

export const DetailListScreen: React.FC = () => {
  useUrlQueryParam(['redem']);
  return <div>DetailListScreen</div>;
};
