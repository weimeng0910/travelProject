/*
 * @Date: 2024-01-08 09:30:53
 * @Description: ProducDetailStyle
 */
import styled from "styled-components";
import SearchBannerBg from '@/assets/images/tropical.png';
import Balloon from '@/assets/icon/balloon.png';
import {
  BorderRadius,
  Font,
  GridBox,
  BaseShadow,
  Ellipsis,
  Padding,
  Margin,
  Center,
  FlexBox,
  Absolute,
  WH,
  Size,
  Transition,
  bgMixin,
  DisabledStyle
} from '@/styles/tools/logicalMixins';
import {
  BorderRadiusBase,
  BackgroundColor,
  FontColor,
  FontSizes,
  BaseBoxShadow,
  Color
} from '@/styles/settings/var';
import media from "@/styles/tools/media";
import { px2vw } from '@/common/hooks';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   flex-direction: column;
   width: 1165px;
   max-width:1165px;
   margin-top:0;
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

export const SearchBannerBox = styled.div`
    border-radius:clamp(5px, 1vw, 12px);
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    width: 100%;
    height: clamp(150px,25vw,430px);
    background: url(${SearchBannerBg})center center no-repeat;
    background-size: 100% clamp(200px,25vw,430px);
    
   h1{
     
     ${Font({ color: FontColor.colorFontWhite, fontWeight: 'bold' })};
     font-size: clamp(16px, 3vw,48px);
   }
   
`;
export const SearchInputBox = styled.div`
  position: absolute;
  ${FlexBox};
  justify-items: center;
  ${Margin({ all: '0' })};
  border-radius:clamp(5px, 1vw, 12px);
  background-color:${BackgroundColor.backgroundColorSecondary};
  width: 90%;
  height: clamp(60px,10vw,120px);
  bottom: clamp(-20px,3vw,-50px);
  & div :first-child{
     ${FlexBox};
     justify-content: flex-start;
     width: 20%;

     & div :first-child{
       margin-left:10px;
       width: 70%;
       ${Font({ color: FontColor.colorFontPrimary, fontWeight: 'bold' })};
       font-size:clamp(14px, 3vw, 46px);
     }
     & div :last-child{
        margin-left:10px;
        width:clamp(20px, 3vw, 40px); 
        height:clamp(30px, 4.5vw, 60px); 
        background:url(${Balloon})center center no-repeat;
        background-size: clamp(20px, 3vw, 40px); 
        text-align:center;
    }
    ${media.phone} {
      & div :last-child{
        display: none;
      }
  }
  }
   & div :nth-child(2){
     ${FlexBox};
    width: 55%;
    
   }
   & div :last-child{
     ${FlexBox};
     width: 25%;
   }
`;
