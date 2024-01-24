/*
 * @Date: 2023-06-13 15:52:52
 * @Description: SearchPage
 */
import React from 'react';
import { useDocumentTitle } from '@/common/hooks/useDocumentTitle';

export const SearchPage: React.FC = () => {
  useDocumentTitle('Search', true);
  return <div>SearchPage</div>;
};
