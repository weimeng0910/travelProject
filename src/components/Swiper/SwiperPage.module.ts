/*
 * @Date: 2023-06-22 08:57:48
 * @Description: Swiper Css
 */
import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { px2vw } from '@/utils';
import {
  BorderRadius,
  Margin,
  FlexBox,
  WH,
  Transition,
  Font,
  bgMixin,
  DisabledStyle,
} from '@/styles/tools/logicalMixins';
import {
  BorderRadiusBase,
  BackgroundColor,
  a11yHidden,
  BorderBase,
  Color,
  FontColor
} from '@/styles/settings/var';
import media from "@/styles/tools/media";

/**
 * Swiper Css
 */

export const Container = styled.div`
  ${WH({ width: '100%' })};
  max-width: 1200px; 
  
  ${media.bigdesktop} {
       width:${px2vw(1200, 1280)} ; 
       
   }
   ${media.desktop} {
       width:${px2vw(1000, 1024)} ;
       
   }
   ${media.tablet} {
       width:${px2vw(758, 768)} ;
       height:${px2vw(200, 768)} ;

   }
   ${media.phone} {
       width:${px2vw(500, 576)} ;
       height:${px2vw(180, 576)} ;
      ${Margin({ y: '1vw', x: 'auto' })};
   }
`;
export const MySwiper = styled(Swiper)`
  .swiper-wrapper{
     height: 330px;
     ${media.bigdesktop} { 
       height:${px2vw(280, 1440)};  
     }
     ${media.desktop} {

       height:${px2vw(260, 1024)};
     }
     ${media.tablet} {

       height:${px2vw(200, 768)};
     }
     ${media.phone} {

       height:${px2vw(200, 576)};
     }
  }
  /* 切换 */
  .swiper-pagination {
     &-bullet {
        cursor: pointer;
        display: inline-block;
        ${BorderRadius({ all: BorderRadiusBase.borderRadiusCircle })};
        ${bgMixin({ color: BackgroundColor.backgroundColorGrey })};
        opacity: 0.2;
        border: ${BorderBase.borderFourth};
        box-shadow: none;
        ${Transition({ properties: 'all 0.4s ease 0s' })}
        transform: scale(0.8);
        &:hover, &-active {
          ${bgMixin({ color: BackgroundColor.backgroundColorprimary })};
          border-color: ${Color.colorPamary};
          transform: scale(1.0);
          opacity: 1;
        }
      }
    }
  
`;



export const CarouseImg = styled.img`
  ${FlexBox}
  ${Margin({ y: '10px', x: 'auto' })};
  max-width: 300px;
  max-height: 180px;
  width:${px2vw(200)};
  height:${px2vw(120)};
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })};
  ${media.bigdesktop} {
       width:${px2vw(260, 1440)} ;  
       height:${px2vw(160, 1440)};  
   }
   ${media.desktop} {
       width:${px2vw(240, 1024)} ;
       height:${px2vw(160, 1024)};
   }
   ${media.tablet} {
       width:${px2vw(180, 768)} ;
       height:${px2vw(120, 768)};
   }
   ${media.phone} {
       width:${px2vw(140, 576)} ;
       height:${px2vw(90, 576)};
       ${BorderRadius({ all: '10px' })};
   }


`

export const CarouseTitle = styled.div`
  ${Font({ color: FontColor.colorFontGrey, fontWeight: 'bold' })};
  font-size:clamp(8px, 1vw, 18px);
  text-align: center;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  ${media.tablet} {
     margin-bottom:${px2vw(30, 768)} ; 
  }
  ${media.phone} {
      margin-bottom:${px2vw(30, 576)} ; 
  }
`;
export const CarouselDescription = styled.div`
  ${FlexBox};
  ${WH({ width: '90%' })};
  ${Margin({ bottom: '4vw' })};
  & div:nth-child(even){
    display: flex;
    width: 50px;
    margin-left:12px;
    /*background-color: red;*/
    justify-items:center;
    align-items: right;
  }
 
  ${media.tablet} {
    ${a11yHidden}
  }
  ${media.phone} {
    ${a11yHidden}
  }

`

export const CarouseRunden = styled.span`
  display:inline-block;
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })};
  ${WH({ all: '10px' })};
  ${bgMixin({ color: Color.colorLightGreen })};
  ${DisabledStyle({ disabled: true })};


`;


export const CarouselMoney = styled.i`
   ${Font({ color: FontColor.colorFontGrey, size: "1em" })};
   ${DisabledStyle({ disabled: true })};
`
