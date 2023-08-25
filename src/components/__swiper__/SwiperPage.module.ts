import styled, { keyframes } from 'styled-components';
/**
 * @date 2023/06/22
 * @description Swiper Css
 */
const innerFrame = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;
//
export const SwiperBox = styled.div`
  display: flex;
  
`;
export const SwiperBarBox = styled.div`
  margin-left:30px;
  
`;
/* 最外层容器,可见区域容器 */
export const Swiper = styled.div`
  position: relative;  //相对定位
  overflow: hidden;
  border-radius: 20px;
`;

export const SwiperNextTip = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ffffff70;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.7;
  user-select: none;
  :hover {
    opacity: 1;
    background: #ffffff80;
  }
`;

export const SwiperPrevTip = (styled as any)(SwiperNextTip)`
  left: 24px;
`;

/*轮播的真实内容区，也就是实际可以移动的区域*/
export const SwiperContainer = styled.div`
  position: relative;
  display: flex;
  
  vertical-align:center;
  justify-content: flex-start;//使容器内的列对齐，从起始位置开始
  transition: 1s cubic-bezier(0.39,0.575,0.565,1);
  /*transition: all 0.5s ease;//transition 属性用于指定为一个或多个 CSS 属性添加过渡效果*/
  //不同浏览器下的动画
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
`;
/*图片循环的节点的渲染*/
export const SwiperSlide = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;//柔性收缩，
`;
/*分页器容器*/
export const SwiperSlideBar = styled.div`
  display: flex;
  flex-direction:column; 
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
 
`;
/*分页器中点击按钮*/
export const SwiperSlideBarItem: any = styled.div`
  cursor: pointer;
  border-radius:50%;//圆型
  overflow:hidden;
  
  width: ${(props: any) => (props.isActive ? '60px' : '60px')};
  height: 60px;
  background: #e6e6e6;
  margin: 8px 0;
  
`;
/*分页器容器的按钮进度条*/
export const SlideBarInner: any = styled.div`
  border-radius:50%;//圆型
  width: 100%;
  height: 100%;
  background: #27ae60;
  opacity:0.6;
  animation: ${innerFrame} ${(props: any) => `${props.speed}s`} ease;
`;