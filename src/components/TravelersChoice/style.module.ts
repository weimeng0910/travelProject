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
 
`;
export const TabsBox = styled.div`
      display: flex;
      flex-direction:row;
      justify-content:flex-start;
      width: 100%;
      
      width: 1165px;

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
       width:${px2vw(560, 576)} ;
      }
      div:first-child{
         position:relative;
         vertical-align: top;
         height: clamp(20px, 4vw, 40px);
         width: clamp(20px, 4vw, 40px);
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
           width: clamp(10px, 2vw, 20px);
           top:28%;
           right: 5px;
         }
       &:after{
         content: '';
         position:absolute;
         top:0;
         border:0 solid ${Color.colorPamary};
         border-width:clamp(10px, 2vw, 20px) 10px;
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
    width: clamp(10px, 20vw, 200px);
    justify-content: flex-end;
    align-items:center;
    div{
      ${BorderRadius({ all: BorderRadiusBase.borderRadiusCircle })}; 
      width:clamp(20px, 5vw, 40px);
      height:clamp(20px, 5vw, 40px);
      line-height:${px2vw(50)} ;
      opacity:0.8;
      overflow: hidden;
      background:url(${CompassIcon})center center no-repeat;
      background-size: clamp(20px, 5vw, 40px);
    }
    ${media.phone} {
     display: none;

   }
  }
       
`;
