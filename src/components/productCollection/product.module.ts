/*
 * @Date: 2023-09-04 12:18:30
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-02 10:53:57
 * @FilePath: /travelProject/src/components/productCollection/product.module.ts
 * @Description: ProductCollection Css
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
 * ProductCollection Css
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
 * goods
*/
export const HotGoodsBox = styled.div`
  ${FlexBox({ flexWrap: 'nowrap' })};
  gap: 20px;
  /*gap:30px;*/
  justify-content: space-between;
  margin-top:${px2vw(20)};
  ${WH({ width: '100%' })};
  max-width: 1165px;
  ${media.bigdesktop} {
    width:${px2vw(1165, 1440)} ;  
   }
   ${media.desktop} {
     width:${px2vw(960, 1024)} ; 
   }
   ${media.tablet} {
     width:${px2vw(720, 768)} ;  
   }
   ${media.phone} {
     width:${px2vw(520, 576)} ; 
   }
  `;

export const ProductBox = styled.div`
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })};
  position: relative;
  cursor: pointer;
  transition:all .3s;
  background-color:#fff;
  max-width: 360px;
  margin: 0;
  
  & div:first-child{
    max-width: 360px;
    width: 360px;
    position: relative;
    overflow: hidden;
    padding-bottom: 56%;
    img{
      ${BorderRadius({ topLeft: BorderRadiusBase.bordeRadiusBase, topRight: BorderRadiusBase.bordeRadiusBase })};
      ${WH({ width: '100%' })};
      ${Absolute({ top: '0', left: '0' })};
    }
  }
  & div:nth-child(2){
    ${FlexBox}
    ${Absolute({ top: '18px', right: '18px' })};
    ${WH({ all: '30px' })};
    ${BorderRadius({ all: BorderRadiusBase.borderRadiusCircle })};  
    ${bgMixin({ color: BackgroundColor.backgroundColorprimary })};
    border: 0 solid palevioletred;
  }
  & div:nth-child(3){
    max-width: 370px;
    text-align: center;
    ${Margin({ top: '.5vw' })}
    ${Font({ color: FontColor.colorFontGrey, size: '1em' })}
    ul li:first-child{
         ${Ellipsis({ webkitLinCclamp: '1' })}
    };
    ul li:nth-child(3){
         display: none;
    
    };
    span{
      text-align: center;
      align-items: center;
      ${Absolute({ top: '95%', right: '0', left: '45%' })};
      ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })}; 
      max-width: 40px;
      max-height: 25px;

      ${Font({ color: FontColor.colorFontWhite, size: '.5em' })};
      cursor: pointer;
      ${bgMixin({ color: '#84CAA6' })};
    }
  }
  &:hover {
    transform: translate(0,-0.625rem);
    ${BaseShadow(BaseBoxShadow.boxShadowDark)}; 
    & div:nth-child(3){
      ul li:nth-child(2){
         display: none;
    
      };
      ul li:nth-child(3){
         display: block;
    
      };
      span{
       display: none;
      }
      
    }   
    };
  ${media.bigdesktop} {
    & div:first-child{
      width:${px2vw(370, 1440)} ;
     } ;
     & div:nth-child(2){
       font-size:${px2vw(25, 1440)} ;
       width:${px2vw(30, 1440)} ;
       height:${px2vw(30, 1440)}
     }  
   };
   ${media.desktop} {
    width:${px2vw(300, 1024)} ;
     & div:first-child{
       width:${px2vw(300, 1024)} ;
     };
     & div:nth-child(2){
      font-size:${px2vw(25, 1024)} ;
      width:${px2vw(30, 1024)} ;
      height:${px2vw(30, 1024)}
     }  
     span{
      width:${px2vw(80, 1024)} ;
      ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeK })};
     }
   };
   ${media.tablet} {
    width:${px2vw(200, 778)} ;
    & div:first-child{
       width:${px2vw(200, 778)} ;
     };
     & div:nth-child(2){
      font-size:${px2vw(18, 768)} ;
      width:${px2vw(20, 768)} ;
      height:${px2vw(20, 768)}  ;
     };

   };
   ${media.phone} {
     width:${px2vw(160, 576)} ;
     ${BorderRadius({ all: '10px' })};
     & div:first-child{
       width:${px2vw(160, 576)} ;
       img{
        ${BorderRadius({ all: '10px' })};
       }
     };
     & div:nth-child(2){
      font-size:${px2vw(14, 576)} ;
      width:${px2vw(20, 576)} ;
      height:${px2vw(20, 576)}  ;
      position:absolute;
      top:${px2vw(12, 576)};
      right: ${px2vw(12, 576)};
     };
       & div:nth-child(3){
        font-size:${px2vw(10, 576)} ;
        span{
          width:${px2vw(20, 576)} ;
        }
       }
   };
  
`;
export const Buttondisplay = styled.button`
 ${Buttons({ color: "#fff;", backgroundColor: '#84CAA6', hoverBackgroundColor: '#2ecc71;', fontSize: '.8em' })};
 ${Margin({ x: '10px', y: '5px' })}
 ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })}; 
 width:${px2vw(60)} ;
 align-items: center;
 ${media.tablet} {
  width:${px2vw(40, 768)} ;
  ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeJ })}
    
 }
 ${media.phone} {
  width:${px2vw(35, 576)} ;
  ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeJ })}
    
 }
  `;
