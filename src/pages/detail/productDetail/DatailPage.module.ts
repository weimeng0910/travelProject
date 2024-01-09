/*
 * @Date: 2024-01-08 09:30:53
 * @Description: ProducDetailStyle
 */
import styled from "styled-components";
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
  DisabledStyle,
  Buttons
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
import Icontemp from '@/assets/icon/icon_temp.png';
import Planebg from '@/assets/images/planebg.png';
export const Container = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap:20px;
   flex-direction: column;
   margin-top:clamp(10px, 1vw, 20px);
   width: 1165px;
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

export const ProductIntroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: clamp(80px,10vw,160px);
  background-color:#F3F5F6;
  border-radius:clamp(5px, 1vw, 18px);
  margin-top: 20px;
  & div :first-child{
     ${FlexBox};
      position:relative;
     justify-content: flex-start;
     align-items:flex-start;
     flex-direction: column;
     margin-left:20px;
     width: 50%;
     h1{
      margin-top: 5px;
      ${Font({ color: FontColor.colorFontPrimary, fontWeight: 'bold' })};
      font-size:clamp(10px, 2vw, 28px);
     }
     h2{
      ${Font({ color: FontColor.colorFontGrey })};
      font-size:clamp(5px, 1vw, 18px);
     }
     
  }

   & div :last-child{
     ${FlexBox};
    
     justify-content: flex-start;
     align-items:flex-start;
     flex-direction: column;
     width: 50%;
      h1{
      margin-top: 5px;
      ${Font({ color: FontColor.colorFontGrey, fontWeight: 'bold' })};
      font-size:clamp(10px, 2vw, 28px);
     }
     img{
      width:clamp(150px, 30vw, 560px);
     }
   }
`;
export const PrimaryButton = styled.button`
 margin-top:clamp(2px, 1vw, 10px);
 text-align: center;
 width: clamp(50px, 6vw, 100px);
 height:clamp(18px, 3vw, 40px);
 ${Buttons({ color: "#fff", hoverBackgroundColor: '#4CAF50' })};
 border-radius:clamp(15px, 1vw, 30px);
 font-size:clamp(8px, 1vw, 18px);
`;
export const PlaneBgStyle = styled.div`
      position:absolute;
      left:clamp(60px, 15vw, 250px);
      top:clamp(18px, 1.5vw, 15px);
      width:clamp(100px, 8vw, 200px);
      height:clamp(60px, 8vw, 150px);
      background:url(${Planebg})center center no-repeat;
      background-size: clamp(60px, 8vw,150px);
      text-align:center;
`;
export const ProductDetailBox = styled.div`
      ${FlexBox};
      justify-content: flex-start;
      align-items:flex-start;
      flex-direction: column;
      margin-top:20px;
      width: 95%;
`;