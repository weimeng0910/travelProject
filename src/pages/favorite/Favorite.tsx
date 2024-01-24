/*
 * @Date: 2023-06-13 14:43:34
 * @Description: Favoritet
 */
import React from 'react';
import { useDocumentTitle } from '@/common/hooks/useDocumentTitle';

export const Favoritet: React.FC = () => {
  useDocumentTitle('Add place to Tripadvisor.', true);
  return <div>Favoritet</div>;
};
