/*
 * @Date: 2023-11-02 10:42:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-12-08 12:57:27
 * @FilePath: /travelProject/src/components/VacationsBar/VacationsBar.module.ts
 * @Description: VacationsBar CSS
 */
import styled from 'styled-components';
import { px2vw } from '@/utils';
import {
  BorderRadius,
  Font,
  GridBox,
  BaseShadow,
  Padding,
  Margin,
  Border,
  FlexBox,
  WH,
  bgMixin,
  Ellipsis
} from '@/styles/tools/logicalMixins';
import {
  BorderRadiusBase,
  BackgroundColor,
  FontColor,
  FontSizes,
} from '@/styles/settings/var';
import media from "@/styles/tools/media";
import Shopping from '@/assets/icon/Shopping.png';

/**
 * VacationsBar Css
 */
export const Container = styled.div`
  ${FlexBox({ direction: 'column', flexWrap: 'nowrap' })};
  max-width:1165px;
  position:relative;
  & span:first-child{
    position:absolute;
    left:clamp(5px, 4vw, 10px);
    top:clamp(-40%, 4vw, -30%);
    width:clamp(20px, 4vw, 40px);
    height:clamp(30px, 4vw, 60px);
    
    background:url(${Shopping})center center no-repeat;
    background-size: clamp(20px, 3vw, 60px);
    text-align:center;
   }
  ${media.bigdesktop} {
       width:${px2vw(1165, 1440)} ;    
   }
  ${media.desktop} {
       width:${px2vw(1000, 1024)} ;
   }
  ${media.tablet} {
       width:${px2vw(758, 768)} ;
   }
  ${media.phone} {
       width:${px2vw(566, 576)} ;
   }

`;
/**
 * text
*/
export const TitleBox = styled.div`
  ${GridBox({ gridTemplateColumns: '350px 1fr 60px' })}
  ${BorderRadius({ all: BorderRadiusBase.borderRadiusSmall })};
  ${bgMixin({ color: BackgroundColor.backgroundColorprimary })};
  ${WH({ width: '100%' })};
  max-width: 1165px;
  height:70px;
  align-items: center;
  & div:first-child{
    display: flex;
    ${Font({ color: FontColor.colorFontWhite, fontWeight: 'bold' })};
    z-index: 999;
    justify-content: center;
    font-size:clamp(12px, 2vw, 30px);
    ${Border({ right: '1px solid #fff' })}
    ${BaseShadow('.0625rem 0 .0625rem -0.0625rem #000')}
    
  }
   & div:nth-child(2){
     display: flex;
     ${Font({ color: FontColor.colorFontWhite })}
     width: 100%;
     margin-left:5px;
     font-size:clamp(5px, 1.5vw, 18px);
    ${media.phone} {
       ${Ellipsis({ webkitLinCclamp: '2' })}
   }
   }
   & div:last-child{
     display: flex;
     justify-content: flex-start;
     ${Font({ color: FontColor.colorFontWhite })}
     font-size:clamp(10px, 2vw, 18px);
     
  }
  ${media.bigdesktop} {
     width:${px2vw(1165, 1440)} ;
   }
  ${media.desktop} {
     ${GridBox({ gridTemplateColumns: '30vw 1fr 10vw' })};
     width:${px2vw(980, 1024)} ;
     height:${px2vw(70, 1024)} ;
  }

  ${media.tablet} {
     ${GridBox({ gridTemplateColumns: '30vw 1fr 10vw' })}
     width:${px2vw(740, 768)} ;
     height:${px2vw(50, 768)} ;
  }

  ${media.phone} {
     width:${px2vw(540, 576)} ;
     height:${px2vw(50, 576)} ;
     & div:first-child{
        ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeS, fontWeight: 'bold' })};
      }
     & div:nth-child(2){
        ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeJ })};
        ${Margin({ right: '35px' })};
       }
      & div:last-child{
         ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeJ })};
      }
  }

`;