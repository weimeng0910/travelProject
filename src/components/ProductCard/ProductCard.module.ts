/*
 * @Date: 2023-10-13 09:30:53
 * @Description: CardStyle
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
type VisibleProps = {
  visible: boolean;
}
export const Container = styled.div`
   max-width:1165px;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap:20px;
   flex-direction: row;
   margin-top:clamp(10px, 1vw, 20px);
   margin-right:10px;
   /*background-color:red;*/
   /* css var */ 
   --main-color: #fff; 
   --f-color: #444;
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
   
   div{
      position:relative;
      height: clamp(60px, 20vw, 220px);
      width: clamp(140px, 45vw, 560px);
      background-image: radial-gradient( circle at right center, #F5FAF8 clamp(12px, 3vw, 30px), var(--main-color) clamp(20px, 4vw, 30px) );
      border-radius:clamp(5px, 1vw, 12px);
      & ul{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap:5px;
        flex-direction: row;
        align-items:center;
        width:clamp(120px, 45vw, 520px);
        height: 100%;
        li{
          display: block;
          
        }
        li:first-child{
          display: flex;
          justify-content:center;
          height: 100%;
          margin:0 auto;
          align-items:center;
          img{
           align-self: center;
           width: clamp(50px, 15vw, 220px);
           height:clamp(26px, 10vw, 160px);
           border-radius:clamp(5px, 1vw, 12px);
           
    }
        }
        li:nth-child(2){
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 30%;
          h2{
            ${Font({ color: FontColor.colorFontBlack, fontWeight: 'bold' })};
            font-size:clamp(8px, 1.5vw, 24px);
            ${Ellipsis({ webkitLinCclamp: '1' })}
          }
          h3{
            ${Font({ color: FontColor.colorFontGrey, fontWeight: 'bold' })};
            font-size:clamp(8px, 1.5vw, 24px);
           
          }
          h4{
            ${Font({ color: FontColor.colorFontPrimary, fontWeight: 'bold' })};
            font-size:clamp(8px, 1.5vw, 24px);
          }
        }
        li:last-child{
          display: flex;
          justify-content: center;
          width: 20%;
          
          
        }
      }
      span{
        display: inline-block;
        position:absolute;
        top: 0;
        right: 0;
        right: clamp(-2px, 1vw, -3px);
        bottom: 0;
        margin: auto;
        width:clamp(8px, 2vw, 20px);
        height: clamp(18px, 4vw, 40px);
        border-radius:clamp(10px, 1vw, 22px);
        font-size: clamp(5px, 1vw, 12px);
        color: #fff;
        writing-mode: vertical-rl;
        text-align: center;
        cursor: pointer;
        background-color:#84CAA6;

        &:hover{
          opacity: 0.6;
          background-color:#84CAA6;
        }
      }
   }
`;
export const ProductContent = styled.div`

  
`;
export const Heartbeat = styled.button<VisibleProps>`
 ${FlexBox({ alignment: 'center' })};
 
 ${BorderRadius({ all: BorderRadiusBase.borderRadiusCircle })};  
 ${bgMixin({ color: BackgroundColor.backgroundColorprimary })};
 border: 0 solid palevioletred;
 color: #fff;
 width: clamp(13px, 3vw, 50px);
 height:clamp(13px, 3vw, 50px);
 opacity: ${(props: VisibleProps) => props.visible ? 'none' : "0.5"};
 ${media.phone} {
    margin-right:10px ;
 }
  `;
export const RoundBox = styled.button`
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })};
  ${bgMixin({ color: Color.colorLightGreen })};
  ${DisabledStyle({ disabled: true })};
  width: clamp(5px, 1vw, 20px);
  height:clamp(5px, 1vw, 20px);
  border: 0 solid palevioletred;
  margin-right:2px;

`;