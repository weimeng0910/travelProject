import { FC } from 'react';
import { MenuLayout, MainLayout } from './HomePage.module';
import { Row } from '@/components/lib/lib';
import { SideMenu } from '@/components/sideMenu';
import { SearchPanel } from '@/components/serchPanel';
/**
 * @date 2023/05/30
 * @description Homepage
 */

export const HomePage: FC = () => {
  return (
    <Row>
      <MenuLayout>
        <SideMenu />
      </MenuLayout>
      <MainLayout>
        <SearchPanel />
      </MainLayout>
    </Row>
  );
};
