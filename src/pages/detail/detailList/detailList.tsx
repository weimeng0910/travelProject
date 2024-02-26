/*
 * @Date: 2023-06-13 14:21:30
 * @Description: DetailList
 */
import React from 'react';

//import { useProductParams } from '../util';
import { useUrlQueryParam } from '@/common/hooks/useUrlQueryParam';
import { useDocumentTitle } from '@/common/hooks/useDocumentTitle';
import { UnderConstruction } from '@/common/components/UnderConstruction';
export const DetailListScreen: React.FC = () => {
  useUrlQueryParam(['redem']);
  useDocumentTitle('Tripadvisor Travelers Choice Awards_ Best of the Best', true);
  return (
    <div>
      <h1>
        DetailListScreen
        <div>
          <UnderConstruction></UnderConstruction>
        </div>
      </h1>
    </div>
  );
};
