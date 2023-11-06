/*
 * @Date: 2023-11-02 10:42:35
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-02 10:44:36
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
  Ellipsis,
  Padding,
  Margin,
  Border,
  FlexBox,
  Absolute,
  WH,
  bgMixin,
  Buttons,
} from '@/styles/tools/logicalMixins';
import {
  BorderRadiusBase,
  BackgroundColor,
  FontColor,
  FontSizes,
  BaseBoxShadow,
} from '@/styles/settings/var';
import media from "@/styles/tools/media";

/**
 * VacationsBar Css
 */
export const Container = styled.div`
  ${FlexBox({ direction: 'column', flexWrap: 'nowrap' })};
  max-width:1165px;

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
  ${GridBox({ gridTemplateColumns: '350px 1fr 100px' })}
  ${BorderRadius({ all: BorderRadiusBase.borderRadiusSmall })};
  ${bgMixin({ color: BackgroundColor.backgroundColorprimary })};
  ${WH({ width: '100%' })};
  max-width: 1165px;
  height:70px;
  align-items: center;
  & div:first-child{
    display: flex;
    ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeXXXL, fontWeight: 'bold' })};
    ${Margin({ all: 'auto' })};
    ${Padding({ right: '28px' })};
    ${Border({ right: '1px solid #fff' })}
    ${BaseShadow('.0625rem 0 .0625rem -0.0625rem #000')}
  }
   & div:nth-child(2){
     ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeL })}
     ${Margin({ right: '35px' })};
   }
   & div:last-child{
     display: flex;
     ${Margin({ all: 'auto' })}
     ${Padding({ right: '28px' })}
     ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeXL })}
     
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
     & div:first-child{
       ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeXXL, fontWeight: 'bold' })};
      }
     & div:nth-child(2){
       ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeM })}
       ${Margin({ right: '35px' })};
      }
      & div:last-child{
        ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeM })}
      }
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