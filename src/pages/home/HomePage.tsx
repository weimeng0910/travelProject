import { FC, useLayoutEffect, useRef, MouseEvent } from 'react';
import {
  Container,
  MenuLayout,
  MainLayout,
  SwiperBox,
  CarouselBox,
  FontBox,
  InnerH3,
} from './HomePage.module';
import { Row } from '@/components/lib/lib';
import { SideMenu } from '@/components/sideMenu';
import { SearchPanel } from '@/components/serchPanel';
import { CarouselPage, CarouselItemPage } from '@/components/Carousel';
import SideImage1 from '@/assets/images/2023-001.png';
import SideImage2 from '@/assets/images/2023-002.png';
import SideImage3 from '@/assets/images/2023-003.png';
import SideImage4 from '@/assets/images/2023-004.png';

/**
 * @date 2023/05/30
 * @description Homepage
 */
//创建图片列表数据
const imageList = [SideImage1, SideImage2, SideImage3, SideImage4];

export const HomePage: FC = () => {
  return (
    <Row>
      <MenuLayout>
        <SideMenu />
        <FontBox>
          <InnerH3>
            <span>Here to help keep you on the move</span>
          </InnerH3>
        </FontBox>
      </MenuLayout>

      <MainLayout>
        <SearchPanel />
      </MainLayout>
    </Row>
  );
};
