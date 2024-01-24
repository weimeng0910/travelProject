/*
 * @Date: 2023-06-13 15:47:32
 * @Description:ReviewPage
 */
import React from 'react';
import { useDocumentTitle } from '@/common/hooks/useDocumentTitle';

export const ReviewPage: React.FC = () => {
  useDocumentTitle('Write a review, make someone is trip.', true);
  return <div>ReviewPage</div>;
};
