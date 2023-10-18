/*
 * @Date: 2023-06-22 08:57:48
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-18 11:23:34
 * @FilePath: /travelProject/src/components/Swiper/SwiperPage.module.ts
 * @Description: Swiper Css
 */
import styled from 'styled-components';
import { Swiper, SwiperSlide, } from 'swiper/react';
import {
  BorderRadius,
  Margin,
  FlexBox,
  WH,
  Transition,
  Font,
  GridBox,
  bgMixin,
  DisabledStyle,
} from '@/styles/tools/logicalMixins';
import {
  BorderRadiusBase,
  BackgroundColor,
  a11yHidden,
  BorderBase,
  Color,
  FontSizes,
  FontColor
} from '@/styles/settings/var';
import media from "@/styles/tools/media";

/**
 * Swiper Css
 */


export const MySwiper = styled(Swiper)`
  ${WH({ width: '70vw' })};
  /* 切换 */
  .swiper-pagination {
     &-bullet {
        cursor: pointer;
        ${WH({ width: '1.3333vw', height: '1.3333vw' })};
        display: inline-block;
        ${BorderRadius({ all: BorderRadiusBase.borderRadiusCircle })};
        ${bgMixin({ color: BackgroundColor.backgroundColorGrey })};
        opacity: 0.2;
        border: ${BorderBase.borderFourth};
        ${Margin({ y: '0', x: '.31vw' })}
        box-shadow: none;
        ${Transition({ properties: 'all 0.4s ease 0s' })}
        transform: scale(0.8);
        &:hover, &-active {
          ${bgMixin({ color: BackgroundColor.backgroundColorprimary })};
          border-color: ${Color.colorPamary};
          transform: scale(1.0);
          opacity: 1;
        }
      }
    }
    ${media.tablet} {
   
     ${WH({ width: '95vw' })};
    }
    ${media.phone} {
   
     ${WH({ width: '90vw' })};
    }    
`;


export const MySwiperSlide = styled(SwiperSlide)`  
   .swiper-slide{
      width: 30vw !important;       
    }     
`;
export const Container = styled.div`
  
  ${media.tablet} {
   ${Margin({ top: '4vw' })};
   
   }
 ${media.phone} {
   ${Margin({ top: '4vw' })};
   
  }
 
`;
export const CarouseImg = styled.img`
  overflow: hidden !important;
  ${FlexBox}
  ${Margin({ y: '1vw', x: 'auto' })};
  ${WH({ width: '20vw', height: '12vw' })};
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })};
  
  ${media.tablet} {
    ${WH({ width: '25vw', height: '16vw' })};
   }
 ${media.phone} {
    ${WH({ width: '27vw', height: '16vw' })};
  }

`

export const CarouseTitle = styled.div`
  
  ${Font({ color: FontColor.colorFontGrey, size: FontSizes.sizeS, fontWeight: 'bold' })};
  text-align: center;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  ${media.tablet} {

    ${Margin({ bottom: '6vw' })};
  }
  ${media.phone} {
      ${Margin({ bottom: '7vw' })};
   
  }
`;


export const CarouseRunden = styled.div`
  display: grid;
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })};
  ${WH({ all: '1vw' })};
  ${bgMixin({ color: Color.colorLightGreen })};
  ${DisabledStyle({ disabled: true })};


`;
export const CarouselDescription = styled.div`
  ${GridBox({ gridTemplateColumns: '2.6667vw 1fr 2.6667vw 1fr', gridColumnGap: '1.3333vw' })}
  justify-items:center;
  align-items: center;
  
  ${WH({ width: '90%' })};
  ${Margin({ bottom: '4vw' })};
  ${media.tablet} {
    ${a11yHidden}
  }
  ${media.phone} {
    ${a11yHidden}
  }

`

export const CarouselMoney = styled.i`
   ${Font({ color: FontColor.colorFontGrey, size: ".6vw" })};
   ${DisabledStyle({ disabled: true })};
`
