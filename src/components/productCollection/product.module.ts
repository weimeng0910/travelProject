/*
 * @Date: 2023-09-04 12:18:30
 * @Description: ProductCollection Css
 */

import styled from 'styled-components';
import { px2vw } from '@/utils';
import {
  BorderRadius,
  Font,
  BaseShadow,
  Ellipsis,
  Margin,
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

  & div:nth-child(3){
    max-width: 370px;
    text-align: center;
    ${Margin({ top: '.5vw' })}
    ${Font({ color: FontColor.colorFontGrey })}
    font-size:clamp(5px, 1vw, 18px);
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
      width: clamp(16px, 3vw, 40px);
      height: clamp(8px, 1.8vw, 25px);
      ${Font({ color: FontColor.colorFontWhite })};
      font-size:clamp(5px, 1vw, 16px);
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
      
      width:${px2vw(30, 1024)} ;
      height:${px2vw(30, 1024)}
     }  
     
   };
   ${media.tablet} {
    width:${px2vw(200, 778)} ;
    & div:first-child{
       width:${px2vw(200, 778)} ;
     };
     & div:nth-child(2){
     
      width:${px2vw(20, 768)} ;
      height:${px2vw(20, 768)}  ;
     };

   };
   ${media.phone} {
     width:${px2vw(160, 576)} ;
     ${BorderRadius({ all: '10px' })};
     & div:first-child{
       width:${px2vw(140, 576)} ;
       img{
        ${BorderRadius({ all: '10px' })};
       }
     };
     & div:nth-child(2){
     
      width:${px2vw(20, 576)} ;
      height:${px2vw(20, 576)}  ;
      position:absolute;
      top:${px2vw(12, 576)};
      right: ${px2vw(20, 576)};
     };
       
   };
  
`;
export const Buttondisplay = styled.button`
 ${Buttons({ color: "#fff;", backgroundColor: '#84CAA6', hoverBackgroundColor: '#2ecc71;' })};
 font-size:clamp(8px, 1vw, 12px);
 ${Margin({ x: '10px', y: '5px' })}
 ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })}; 
 width:clamp(35px, 3vw, 60px);
 height:clamp(18px, 1.8vw, 30px);
 align-items: center;
 
  `;
export const Heartbeat = styled.button`
 ${FlexBox}
 ${Absolute({ top: 'clamp(8px, 1vw, 18px)', right: 'clamp(12px, 2vw, 30px);' })};
 ${BorderRadius({ all: BorderRadiusBase.borderRadiusCircle })};  
 ${bgMixin({ color: BackgroundColor.backgroundColorprimary })};
 border: 0 solid palevioletred;
 font-size:clamp(5px, 2vw, 30px);
 width:clamp(10px, 3vw, 35px);
 height: clamp(10px, 3vw, 35px);
  `;