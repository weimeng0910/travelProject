/*
 * @Date: 2023-06-13 15:38:54
 * @Description: Tickets
 */
import React from 'react';
import { useDocumentTitle } from '@/common/hooks/useDocumentTitle';
import { UnderConstruction } from '@/common/components/UnderConstruction';
export const Tickets: React.FC = () => {
  useDocumentTitle('Search hundreds of flight sites at once.', true);
  return (
    <div>
      <h1>Tickets</h1>
      <div>
        <UnderConstruction></UnderConstruction>
      </div>
    </div>
  );
};
