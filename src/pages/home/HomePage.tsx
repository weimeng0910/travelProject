import { FC } from 'react';
import { MenuLayout, MainLayout, SwiperBox, CarouselBox, FontBox } from './HomePage.module';
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
          <h1>We Are The Best Travel Agent</h1>
        </FontBox>
      </MenuLayout>
      <MainLayout>
        <SearchPanel />
        <SwiperBox>
          <CarouselBox>
            <CarouselPage width={'650px'} height={'300px'}>
              {imageList.map((item: string, index: number) => (
                <CarouselItemPage key={index}>
                  <img src={item} style={{ width: '650px' }} alt="" />
                </CarouselItemPage>
              ))}
            </CarouselPage>
          </CarouselBox>
        </SwiperBox>
        <div>
          <div>
            <h1>Event dates</h1>
          </div>
        </div>
      </MainLayout>
    </Row>
  );
};
