/*
 * @Date: 2023-06-13 14:43:34
 * @Description: Favoritet
 */
import React from 'react';

import { useDocumentTitle } from '@/common/hooks/useDocumentTitle';
import { UnderConstruction } from '@/common/components/UnderConstruction';

export const Favoritet: React.FC = () => {
  useDocumentTitle('Add place to Tripadvisor.', true);
  return (
    <div>
      <h1>Favoritet</h1>

      <div>
        <UnderConstruction></UnderConstruction>
      </div>
    </div>
  );
};
