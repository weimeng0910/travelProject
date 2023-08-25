import { FC, useEffect, useRef, useState } from 'react';

import {
  Swiper,
  SwiperNextTip,
  SwiperPrevTip,
  SwiperContainer,
  SwiperSlide,
  SwiperSlideBar,
  SwiperSlideBarItem,
  SlideBarInner,
  SwiperBox,
  SwiperBarBox,
} from './SwiperPage.module';

/**
 * @date 2023/06/22
 * @description SwiperPage
 */

interface SwiperType {
  //定义水平还是垂直
  direction?: 'horizontal' | 'vertical'; // 是否纵向
  speed?: number; // 自动播放间隔
  width: string;
  height: string;
  urls: string[]; // 图片数组
}
//轮播组件
export const SwiperPage: FC<SwiperType> = ({
  direction = 'horizontal',
  speed = 3,
  width = '',
  height = '',
  urls = [],
}) => {
  //当前索引，定义activeIndex这个state，用来标记当前展示的节点
  const [activeIndex, setActiveIndex] = useState<number>(0);

  //用isDone标记是否所有图片都已轮播完成(所以反馈参数)
  const [isDone, setDone] = useState<boolean>(false);

  // 设置移动容器的宽度和高度
  const [swiperStyle, setSwiperStyle] = useState<{
    width: string;
    height: string;
  }>({
    width: (width as string)?.replace('%', 'vw'),
    height: (height as string)?.replace('%', 'vh'),
  } as any);

  //timer接收参数的定义，这里我们可以选择使用useRef来保存定时器
  const timer = useRef<any>(null);

  //移动容器的ref,获取移动容器的dom
  const swiperContainerRef = useRef<HTMLDivElement>(null);

  // 获取SwipeItem应该设置高度还是宽度是百分比还是像素
  const styles = {
    width: isNaN(+swiperStyle.width) ? swiperStyle!.width : `${swiperStyle!.width}px`,
    height: isNaN(+swiperStyle.height) ? swiperStyle.height : `${swiperStyle.height}px`,
  };

  //设置定时器
  const startPlaySwiper = () => {
    //if (speed <= 0) return;
    timer.current = setInterval(() => {
      setActiveIndex(preValue => preValue + 1);
    }, 5000);
  };

  const slideToOne = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    clearInterval(timer?.current);
    startPlaySwiper();
  };

  useEffect(() => {
    if (swiperContainerRef?.current) {
      startPlaySwiper();
    }
    return () => {
      clearInterval(timer?.current);
      timer.current = null;
    };
  }, [swiperContainerRef?.current]);

  //使用useEffect对于activeIndex进行监听。
  useEffect(() => {
    const swiper = document.querySelector('#swiper-container') as any;
    // 根据用户传入的轮播方向，决定是在bottom上变化还是right变化
    if (direction === 'vertical') {
      // 兼容用户输入百分比的模式
      swiper.style.bottom = (height as string)?.includes('%')
        ? `${activeIndex * +(height as string)?.replace('%', '')}vh`
        : `${activeIndex * +height}px`;
    } else {
      swiper.style.right = (width as string)?.includes('%')
        ? `${activeIndex * +(width as string)?.replace('%', '')}vw`
        : `${activeIndex * +width}px`;
    }
    // 判断如果到达最后一张，停止自动轮播
    if (activeIndex >= urls.length - 1) {
      clearInterval(timer?.current);
      timer.current = null;
      setDone(true);
    }
  }, [activeIndex, urls]);

  return (
    <>
      <SwiperBox>
        <Swiper style={{ width, height }}>
          <SwiperContainer
            id="swiper-container"
            ref={swiperContainerRef}
            style={{
              height,
              // 根据轮播方向参数，调整flex布局方向
              flexDirection: direction === 'horizontal' ? 'row' : 'column',
            }}
          >
            {urls.map((f: string, index: number) => (
              <SwiperSlide key={index} style={{ ...styles }}>
                <img src={f} style={{ ...styles }} alt="" />
              </SwiperSlide>
            ))}
          </SwiperContainer>
        </Swiper>
        <SwiperBarBox>
          {urls?.length > 1 ? (
            <SwiperSlideBar>
              {urls?.map((f: string, index: number) => (
                <SwiperSlideBarItem
                  key={index}
                  onClick={() => slideToOne(index)}
                  isActive={index === activeIndex}
                >
                  {index === activeIndex ? <SlideBarInner speed={speed} /> : null}
                  <img src={urls[index]} />
                </SwiperSlideBarItem>
              ))}
            </SwiperSlideBar>
          ) : null}
        </SwiperBarBox>
      </SwiperBox>
    </>
  );
};
