import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import {
  SwiperBox,
  Carousel,
  CarouselItem,
  Inner,
  SwiperBarBox,
  SwiperSlideBar,
} from './Carousel.module';
/**
 * @date 2023/06/22
 * @description CarouselPage
 */

export interface CarouselItemProps {
  children: React.ReactNode;
  width: string;
}

//CarouselItem 组件将渲染项目本身,width我们现在只需要将属性传递给这个组件
export const CarouselItemPage = ({ children, width }: CarouselItemProps) => {
  return (
    <>
      <CarouselItem style={{ width: width }}>{children}</CarouselItem>
    </>
  );
};

//定义类型
export interface CarouselProps {
  children: React.ReactNode;
}

//Carousel 组件将作为控制项目的主控制器
export const CarouselPage: React.FC<CarouselProps> = ({ children }: CarouselProps) => {
  //当前索引，定义activeIndex这个state，用来标记当前展示的节点
  const [activeIndex, setActiveIndex] = useState<number>(0);
  //态paused来检查用户是否将鼠标悬停在轮播上。false默认设置
  const [paused, setPaused] = useState(false);
  /*
   Inner组件中translateX(-${activeIndex * 100}%)。
   我们为什么使用100？因为我们每个项目都有 100% 的宽度。
   例如，如果我们有 2 个活动项目（每个项目宽度为 50%）
   并且我们需要逐项滑动，那么数字应该是50=> 50%
  */
  // 此方法将接收一个新索引并检查活动是否是第一项或最后一项;
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  //使用useEffect对于activeIndex进行监听。
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  //轮子控制滑动和点击
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });
  return (
    <>
      <SwiperBox>
        <Carousel
          {...handlers}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {React.Children.map(children, (child: any, index: number) => {
              return React.cloneElement(child, { width: '100%' });
            })}
          </Inner>
          <SwiperBarBox style={{ marginTop: '150px' }}>
            <button
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
            >
              Prev
            </button>
            {React.Children.map(children, (child, index) => {
              return (
                <button
                  className={`${index === activeIndex ? 'active' : ''}`}
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
            <button
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
            >
              Next
            </button>
          </SwiperBarBox>
        </Carousel>
      </SwiperBox>
    </>
  );
};
