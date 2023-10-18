/*
 * @Date: 2023-09-04 12:18:30
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-18 12:25:17
 * @FilePath: /travelProject/src/components/productCollection/product.module.ts
 * @Description: ProductCollection Css
 */

import styled from 'styled-components';
import { HeartTwoTone } from '@ant-design/icons';
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
  ZIndex,
  a11yHidden
} from '@/styles/settings/var';
import media from "@/styles/tools/media";

/**
 * ProductCollection Css
 */

export const Container = styled.div`
     /* css var */ 
   --main-color: #fff; 
   --f-color: #444;
  ${FlexBox({ direction: 'column', flexWrap: 'nowrap' })}
`;
/**
 * text
*/
export const TitleBox = styled.div`
  ${GridBox({ gridTemplateColumns: '1fr 1fr 5vw' })}
  align-items: center;
  ${BorderRadius({ all: BorderRadiusBase.borderRadiusSmall })};
  ${bgMixin({ color: BackgroundColor.backgroundColorprimary })};
  ${WH({ width: '100%', height: '8vw' })};
  ${media.desktop} {
   ${GridBox({ gridTemplateColumns: '30vw 1fr 10vw' })};
   ${WH({ height: '8vw' })};
  }

  ${media.tablet} {
   ${GridBox({ gridTemplateColumns: '30vw 1fr 10vw' })}
   ${WH({ height: '10vw' })};
  }

  ${media.phone} {
   ${WH({ height: '10vw' })};
  }
`;

export const TripText = styled.div`
  display: flex;
  ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeXXXL, fontWeight: 'bold' })};
  ${Margin({ all: 'auto' })};
  ${Padding({ right: '2vw' })};
  ${Border({ right: '.0667vw solid #fff' })}
  ${BaseShadow('.0625rem 0 .0625rem -0.0625rem #000')}
  
  ${media.tablet} {
    ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeXXL, fontWeight: 'bold' })};
  }
  ${media.phone} {
    ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeS, fontWeight: 'bold' })};
  }
  `;

export const DescribeText = styled.div`

  ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeL })}
  ${Margin({ right: '2.6667vw' })}
  ${media.desktop} {
    ${WH({ width: '80%' })};
    ${Margin({ right: '1vw' })}
    ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeL })}
    ${Ellipsis({ webkitLinCclamp: '2' })};
  }
  ${media.tablet} {
    ${WH({ width: '80%' })};
    ${Margin({ right: '1vw' })}
    ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeM })}
    ${Ellipsis({ webkitLinCclamp: '2' })};
  }
  ${media.phone} {
    ${WH({ width: '80%' })};
    ${Margin({ right: '1vw' })}
    ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeJ })}
    ${Ellipsis({ webkitLinCclamp: '2' })};
  }
  `;

export const MoreText = styled.div`
  display: flex;
  ${Margin({ all: 'auto' })}
  ${Padding({ right: '2vw' })}
  ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeXL })}
  ${media.tablet} {

    ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeM })}
  
  }
  ${media.phone} {

    ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeJ })}
   
  }
  `;
/**
 * goods
*/
export const HotGoodsBox = styled.div`
  ${GridBox({ gridColumnGap: '1vw' })}
  ${WH({ width: '100%' })};
  `;

export const ProductBox = styled.div`
  display: grid;
  grid-template-rows:2fr 1fr;
  position: relative;
  ${Margin({ top: '2vw' })};
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })};
  cursor: pointer;
  transition:all .3s;

  &:hover {
    transform: translate(0,-0.625rem);;
    ${BaseShadow(BaseBoxShadow.boxShadowBase)}
    ul li:nth-child(2){
       ${a11yHidden}
    } 
    ul li:last-child{
    display: block;  
    }
    #Hotspan{
      display: none;
    }
    #HotGoodsWord{
      background-image:none;
    }
    }

  
`;

export const HotGoodsImg = styled.div` 
  ${bgMixin({ color: BackgroundColor.backgroundColorFourth })};
  ${WH({ width: '100%', height: '16vw' })};
  
  ${media.tablet} {
    ${WH({ height: '18vw' })};
  }
  ${media.phone} {
    ${WH({ height: '25vw' })}; 
  }
  `;

export const Img = styled.img`
  ${FlexBox}
  ${BorderRadius({ topLeft: BorderRadiusBase.bordeRadiusBase, topRight: BorderRadiusBase.bordeRadiusBase })};
  ${Margin({ y: '0', x: 'auto' })}
  ${WH({ width: '100%', height: '16vw' })};

  ${media.tablet} {
    ${WH({ height: '18vw' })};
  }
  ${media.phone} {
    ${WH({ height: '25vw' })}; 
  }
`;

export const Hot = styled.button`
  ${FlexBox}
  ${Absolute({ top: '1.25vw', right: '1.25vw' })}
  ${WH({ all: '2.5vw' })};
  ${ZIndex.indexNormal};
  ${BorderRadius({ all: BorderRadiusBase.borderRadiusCircle })};  
  ${bgMixin({ color: BackgroundColor.backgroundColorprimary })};
  border: 0 solid palevioletred;

  ${media.tablet} {
    ${WH({ all: '3vw' })};
  }
  ${media.phone} {
    ${WH({ all: '3vw' })};
  }
  `;

export const Heart = styled(HeartTwoTone)`
 
  ${Font({ size: FontSizes.sizeXXL })}
  ${media.phone} {
     ${Font({ size: FontSizes.sizeK })}

    } 
  `;
export const Buttondisplay = styled.button`
 ${Buttons({ color: "#fff;", backgroundColor: '#84CAA6', hoverBackgroundColor: '#2ecc71;', fontSize: '1em' })};
 ${Margin({ x: '1vw', y: '2vw' })}
 ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })}; 
 ${media.phone} {
   
      ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeJ })}
    
    }
 
  `;
export const HotGoodsWord = styled.div`
  position:relative;
  text-align: center;
  ${BorderRadius({ bottomLeft: BorderRadiusBase.bordeRadiusBase, bottomRight: BorderRadiusBase.bordeRadiusBase })}; 
  ${Font({ color: FontColor.colorFontPrimary, size: '1em' })};
  ${bgMixin({ color: BackgroundColor.backgroundColorFourth })};
  background-image: radial-gradient( circle at bottom center, #F5FAF8 2vw, var(--main-color) 1.3vw );
  &:hover{
    background-image:none;
    span{
      display: none;
     }
   } 
   ${media.phone} {
    
      ${Font({ size: FontSizes.sizeJ })}
    
    }
 
  ul {
    ${Padding({ all: '0' })};
    ${Margin({ all: '0' })};
    ${WH({ width: '100%', height: '7vw' })};
  }
  ul li:first-child{
    ${WH({ width: '90%' })};
    ${Margin({ top: '.5vw' })}
    ${Ellipsis({ webkitLinCclamp: '1' })}
     ${media.phone} {
    
       ${Margin({ top: '3vw' })}
    
    }
  };
  ul li:nth-child(2){
    display: block;
    ${WH({ width: '90%' })};
    ${Font({ color: FontColor.colorFontGrey, size: '1em', fontWeight: 'bold' })};
    ${Ellipsis({ webkitLinCclamp: '1' })};
    
  };
  ul li:last-child{
     ${a11yHidden}
     ${WH({ width: '100%' })};
     
  };
  ul li button:first-child{
    ${media.tablet} {
   
       ${a11yHidden}
       
     }
    ${media.phone} {
   
      ${a11yHidden}
    
    }
    
  };
  
  `;
export const HotGoodsSpan = styled.span`
  line-height: 1.2vw;
  text-align: center;
  ${Absolute({ top: '85%', right: '0', left: '45%', bottom: '0' })};
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })}; 
  ${WH({ width: '2.3vw', height: '1.2vw' })};
  ${Font({ color: FontColor.colorFontWhite, size: '.5em' })};
  cursor: pointer;
  ${bgMixin({ color: '#84CAA6' })};
  &:hover{
     opacity: 0.6;
     ${bgMixin({ color: '#84CAA6' })};
     
   }      
  ${media.tablet} {
   
      ${WH({ width: '2.6vw', height: '1.5vw' })};
     
     }
    ${media.phone} {
       ${Absolute({ top: '90%', right: '0', left: '46%', bottom: '0' })};
       ${Font({ color: FontColor.colorFontWhite, size: '.3em' })};
    }
  `;
