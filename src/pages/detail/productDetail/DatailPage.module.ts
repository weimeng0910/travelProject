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
import Planebg from '@/assets/images/planebg.png';


export const Container = styled.div`
   ${FlexBox({ direction: 'column', flexWrap: 'nowrap', spacing: 'flex-start' })}
   flex:1;
   gap:20px;
   ${Margin({ x: 'auto' })};
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


export const PrimaryButton = styled.button`
 margin-top:clamp(2px, 1vw, 10px);
 text-align: center;
 width: clamp(50px, 6vw, 100px);
 height:clamp(18px, 3vw, 40px);
 ${Buttons({ color: "#fff", hoverBackgroundColor: '#4CAF50' })};
 border-radius:clamp(15px, 1vw, 30px);
 font-size:clamp(8px, 1vw, 18px);
`;

export const ProductDetailBox = styled.div`
      ${FlexBox({ direction: 'column', flexWrap: 'nowrap', spacing: 'flex-start' })}
      align-items:center;
      width: clamp(310px,98vw,1165px);
      
      background-color:#F3F5F6;
      border-radius:clamp(5px, 1vw, 18px);
      margin-top:20px;

`;
export const ProductTitleBox = styled.div`
        ${FlexBox};
        align-items:flex-start;
        flex-direction: column;
        margin-left:clamp(5px, 1vw, 18px);
        width: 100%;
        & h1{
          margin-top: 10px;
          ${Font({ color: FontColor.colorFontGrey, fontWeight: 'bold' })};
          font-size:clamp(10px, 2vw, 28px);
         }
        & h2{
          margin-top: 10px;
          ${Font({ color: FontColor.colorFontGrey })};
          font-size:clamp(5px, 1vw, 18px);
         }
         & div{
          display: flex;
          flex-direction: row;
          margin-top: 10px;
          ${Font({ color: FontColor.colorFontGrey })};
          font-size:clamp(5px, 1vw, 18px);
          & span{
            margin-left:10px;
          }
          
         }
       
`;
export const ProductImageBox = styled.div`
      ${GridBox({ gridTemplateColumns: '2fr 1fr' })};
      justify-content: center;
      margin-top:clamp(10px, 1vw, 20px);
      width: 95%;
      & div :first-child{
        img{
          width: clamp(120px, 55vw, 700px);
          
          border-radius:clamp(10px, 1vw, 30px);
        }
      }
      & div :last-child{
        display: flex;
        flex-direction: column;
        
        img{
          margin-bottom:clamp(10px, 1vw, 15px);
          width: clamp(100px, 38vw, 400px);
          height: clamp(60px, 17vw, 220px);
          border-radius:clamp(8px, 1vw, 30px);
        }
      }
       
`;
export const ProducTextBox = styled.div`
      display: flex;
      flex-direction: row;
      margin-top:clamp(5px, 1vw, 20px);
      width:calc(100% - 10px);
      margin-left:10px;

      div :first-child{
        width: 50%;
        
        & h1{
          margin-top: 10px;
          ${Font({ color: FontColor.colorFontGrey, fontWeight: 'bold' })};
          font-size:clamp(10px, 2vw, 28px);
         }
        & h3{
          margin-top: 10px;
          ${Font({ color: FontColor.colorFontGrey })};
          font-size:clamp(5px, 1vw, 18px);
         }
         & ul{
         
          ${Font({ color: FontColor.colorFontGrey })};
          font-size:clamp(5px, 1vw, 18px);
        }
      }
      div :last-child{
        ${FlexBox({ direction: 'column', flexWrap: 'nowrap', spacing: 'flex-start' })}
        width: 50%;
        flex-direction: column;
        align-items:center;
        & div{
          width: clamp(140px, 28vw, 460px);
          height: clamp(100px, 18vw, 280px);
          border-radius:clamp(12px, 1vw, 20px);
          border:1px solid #7f8c8d;
          
            h1{
              margin-top: 10px;
              ${Font({ color: FontColor.colorFontGrey, fontWeight: 'bold' })};
              font-size:clamp(10px, 2vw, 28px);
              text-align:center;
            }
            h3{
              ${Font({ color: FontColor.colorFontGrey })};
              font-size:clamp(5px, 1vw, 12px);
            }
          
        }
        
      }
       
`;

export const BookButton = styled.button`
 margin-top:clamp(2px, 1vw, 10px);
 text-align: center;
 width: clamp(100px, 13vw, 260px);
 height:clamp(18px, 3vw, 50px);
 ${Buttons({ color: "#fff", hoverBackgroundColor: '#4CAF50' })};
 border-radius:clamp(15px, 2vw, 45px);
 font-size:clamp(8px, 1vw, 18px);
`;