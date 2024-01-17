/*
 * @Date: 2023-09-04 12:18:46
 * @Description: FooterPage Css
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


export const Container = styled.div`
  display: flex;
  z-index: -1;
  flex-flow:column nowrap;
  align-items:center;
  width: 100%;
  background-color:#F0F2F5;
`
export const FooterMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top:15px;
  width: 1165px;
  max-width:1165px;
  align-items:center;
  

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

     & div:first-child{
      display: felx;
     
      margin-right:5px;
     
     }
     & div:nth-child(2){
      display: felx;
      flex-flow:row wrap;
      span{
        display: block;
        margin-right:10px;
        text-decoration:underline;
        font-size:clamp(8px, 1vw, 14px);
      }
       

     }
     & div:last-child{
      display: flex;
      margin-left:10px;
      font-size:clamp(8px, 1vw, 14px);
     }
`;
export const FootercopyrightContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

     &  h1{
      margin-top: 5px;
      ${Font({ color: FontColor.colorFontGrey, fontWeight: 'bold' })};
      font-size:clamp(10px, 1vw, 18px);
     }
`;
export const Heartbeat = styled.div`
 ${FlexBox({ alignment: 'center' })};
 ${BorderRadius({ all: BorderRadiusBase.borderRadiusCircle })};  
 ${bgMixin({ color: BackgroundColor.backgroundColorprimary })};
 border: 0 solid palevioletred;
 color: #fff;
 width: clamp(13px, 2vw, 30px);
 height:clamp(13px, 2vw, 30px);
 ${media.phone} {
    margin-right:10px ;
 }
  `;