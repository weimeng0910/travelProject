import styled from 'styled-components';
import { px2vw } from '@/utils';
import CompassIcon from '@/assets/icon/compass.png';
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
  Color,
  SizeBase
} from '@/styles/settings/var';
import media from "@/styles/tools/media";

export const Container = styled.div`
  ${FlexBox({ direction: 'column', flexWrap: 'nowrap' })};
  ${Margin({ bottom: SizeBase })};
  max-width:1165px;
  width: 1165px;
/*background-color:red;*/
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
export const TabsBox = styled.div`
      display: flex;
      flex-direction:row;
      justify-content:flex-start;
      width: 100%;
      div:first-child{
         position:relative;
         vertical-align: top;
         height: 40px;
         width: 40px;
         line-height:40px;
         padding: 0 10px 0 5px;
         text-align: right;
         margin-right: 5px;
         border-radius:4px 0 0 4px;
         color:white;
         background: #20B971;
         text-decoration: none;
        #Icon{
           position:absolute;
           top:28%;
           right: 5px;
         }
       &:after{
         content: '';
         position:absolute;
         top:0;
         border:0 solid ${Color.colorPamary};
         border-width:20px 10px;
         width: 0;
         height: 0;
       }
       &:before {
         border:none;
       }
       &:after{
         left:100%;
         border-color:transparent;
         border-left-color:#20B971;
       }
        &:hover {
          background-color: #47CF73;
      
        &:after {
          border-left-color: #47CF73;
        }
    }
  }
  & div :last-child{
    display: flex;
    position:relative;
    div{
    position:absolute;
    left: 90px;
    ${BorderRadius({ all: BorderRadiusBase.borderRadiusCircle })}; 
    width:${px2vw(30)} ;
    height:${px2vw(30)} ;
    line-height:${px2vw(50)} ;
    opacity:0.8;
    overflow: hidden;
    background:url(${CompassIcon})center center no-repeat;
    background-size: ${px2vw(30)} ;
    text-align:center;
    ${media.bigdesktop} {
        width:${px2vw(50, 1440)} ;
        height:${px2vw(50, 1440)} ;
        background-size: ${px2vw(50, 1440)} ;
        left: 100px;
    }
    ${media.desktop} {
        width:${px2vw(50, 1024)} ;
        height:${px2vw(50, 1024)} ;
        background-size: ${px2vw(50, 1024)} ;
        left: ${px2vw(160, 1024)} ;
    }
    ${media.tablet} {
        width:${px2vw(40, 768)} ;
        height:${px2vw(40, 768)} ;
        background-size: ${px2vw(40, 768)} ;
        left: ${px2vw(100, 768)} ;
    }
    ${media.phone} {
   display: none;

   }
    }
  }
       
`;
