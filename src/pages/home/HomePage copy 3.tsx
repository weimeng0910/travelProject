import { FC, useLayoutEffect, useRef, MouseEvent } from 'react';
import {
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
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  let mouse = {
    px: 0,
    py: 0,
    x: 0,
    y: 0,
  };

  //updatePosition(): 获取鼠标当前相对(0,0)的坐标位置。
  const updatePosition = (e: MouseEvent<HTMLElement>) => {
    mouse.x = e.clientX - mouse.px;
    mouse.y = (e.clientY - mouse.py) * -1;
  };

  //setOrigin(): 设置鼠标的初始坐标，即把#container的中心位置设为(0,0)。
  const setOrigin = (e: HTMLElement) => {
    mouse.px = e.offsetLeft + Math.floor(e.offsetWidth / 2);

    mouse.py = e.offsetTop + Math.floor(e.offsetHeight / 2);
  };

  //在useLayoutEffect挂钩中，更新宽度和高度的状态变量
  //useLayoutEffect在浏览器重新绘制屏幕之前调用以执行布局测量
  //useLayoutEffect钩子通常用于从 DOM 读取布局
  useLayoutEffect(() => {
    setOrigin(containerRef.current as HTMLElement);
  }, []);

  //更新元素样式的 transform 属性
  const updateTransformStyle = (x: string, y: string) => {
    let style = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
    if (innerRef.current != undefined) {
      innerRef.current.style.transform = style;
    }
  };

  //根据鼠标移动的距离来改变 #inner 的倾斜度
  const update = (event: MouseEvent<HTMLElement>, ref: HTMLElement) => {
    updatePosition(event);
    updateTransformStyle(
      (mouse.y / ref!.offsetHeight / 2).toFixed(2),
      (mouse.x / ref!.offsetWidth / 2).toFixed(2)
    );
  };
  //
  let counter = 0;
  let updateRate = 1;
  //可以控制 update() 调用的频率,当 counter 值是 updateRate 的整数倍时
  //更新才会发生。这段代码表示 isTimeToUpdate() 每执行 10 次，更新才会发生一次。
  const isTimeToUpdate = function () {
    return counter++ % updateRate === 0;
  };
  //定义鼠标控制器，鼠标移入时的事件
  const onMouseEnterHandler = (event: MouseEvent<HTMLElement>) => {
    update(event, innerRef.current!);
  };
  //定义鼠标离开进的事件
  const onMouseLeaveHandler = (event: MouseEvent<HTMLElement>) => {
    if (innerRef.current != undefined) {
      const inner = innerRef.current as any;
      inner.style = '';
    }
  };
  //定义鼠标移动事件
  const onMouseMoveHandler = (event: MouseEvent<HTMLElement>) => {
    if (isTimeToUpdate()) {
      update(event, innerRef.current!);
    }
  };

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
        <SwiperBox
          ref={containerRef}
          onMouseOver={onMouseEnterHandler}
          onMouseMove={onMouseMoveHandler}
          onMouseOut={onMouseLeaveHandler}
        >
          <CarouselBox ref={innerRef}>
            <CarouselPage width={'400px'} height={'200px'}>
              {imageList.map((item: string, index: number) => (
                <CarouselItemPage key={index}>
                  <img src={item} style={{ width: '380px' }} alt="" />
                </CarouselItemPage>
              ))}
            </CarouselPage>
          </CarouselBox>
        </SwiperBox>
      </MainLayout>
    </Row>
  );
};
