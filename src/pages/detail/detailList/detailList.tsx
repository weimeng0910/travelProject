/*
 * @Date: 2023-06-13 14:21:30
 * @Description: DetailList
 */
import React from 'react';
//import { useProductParams } from '../util';
import { useUrlQueryParam } from '@/common/hooks/useUrlQueryParam';
import { useDocumentTitle } from '@/common/hooks/useDocumentTitle';
export const DetailListScreen: React.FC = () => {
  useUrlQueryParam(['redem']);
  useDocumentTitle('Tripadvisor Travelers Choice Awards_ Best of the Best', true);
  return <div>DetailListScreen</div>;
};
