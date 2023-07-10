import { FC, useRef, MouseEvent } from 'react';
import { MenuLayout, MainLayout, SwiperBox, CarouselBox, FontBox, FontH3 } from './HomePage.module';
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
  const divRef = useRef<null | HTMLDivElement>(null);
  let mouse = {
    Px: 0,
    Py: 0,
    w: 0,
    h: 0,
  };
  //updatePosition(): 获取鼠标当前相对(0,0)的坐标位置。
  const updatePosition = (e: MouseEvent<HTMLDivElement>) => {
    mouse.Px = e.currentTarget.offsetLeft;
    mouse.Py = e.currentTarget.offsetTop;
    mouse.w = e.currentTarget.offsetWidth;
    mouse.h = e.currentTarget.offsetHeight;
    console.log(mouse.Px, mouse.Py, mouse.w, mouse.h);
  };
  //setOrigin(): 设置鼠标的初始坐标，即把#container的中心位置设为(0,0)。
  const setOrigin = (e: MouseEvent<HTMLElement>) => {
    let bgOpt = mouse;
    let X: number, Y: number;
    let mouseX = e.pageX - bgOpt.Px;
    let mouseY = e.pageY - bgOpt.Py;
    if (mouseX > bgOpt.w / 2) {
      X = mouseX - bgOpt.w / 2;
    } else {
      X = mouseX - bgOpt.w / 2;
    }
    if (mouseY > bgOpt.h / 2) {
      Y = bgOpt.h / 2 - mouseY;
    } else {
      Y = bgOpt.h / 2 - mouseY;
    }
    if (divRef.current != undefined) {
      divRef.current.style['transform'] = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`;
      divRef.current.style.transform = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`;
    }
  };
  const bgOut = (e: MouseEvent<HTMLElement>) => {
    if (divRef.current != undefined) {
      divRef.current.style['transform'] = 'rotateY(0deg) rotateX(0deg)';
      divRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
    }
  };

  return (
    <Row>
      <MenuLayout>
        <SideMenu />
        <FontBox
          ref={divRef}
          onMouseOver={updatePosition}
          onMouseMove={setOrigin}
          onMouseOut={bgOut}
        >
          <div>Here to help keep you on the move</div>
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
