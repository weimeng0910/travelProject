import styled from 'styled-components';
import { Button } from 'antd'
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
  Size,
  Transition,


} from '@/styles/tools/logicalMixins';
import {
  BorderRadiusBase,
  BackgroundColor,
  FontColor,
  FontSizes,
  BaseBoxShadow,
  ZIndex
} from '@/styles/settings/var'
import media from "@/styles/tools/media";

/**
 * @date 2023/09/04
 * @description ProductCollection Css
 */

export const Container = styled.div`
  ${WH({ width: '100%', height: '4vw' })}
  ${Margin({ all: '0' })};
  ${Padding({ all: '0' })}; 
  background-color:${BackgroundColor.backgroundColorFifrtary};
  ul{
    display: inline-block;
    ${Margin({ all: '0' })};
    ${Padding({ all: '0' })}; 
  }

  ul li{
    float: right;
    ${Margin({ top: '0.2vw', bottom: '0', left: '0', right: '-3.1vw' })}
    ${Padding({ all: '0.31vw' })};
    ${BorderRadius({ all: '3.12vw' })}
    background-color:${BackgroundColor.backgroundColorFifrtary};
    ${Transition({ properties: 'all', time: '0.2s' })};
    cursor: pointer;
    
  }
  ul li:last-child span{
    display: block;
    overflow: hidden;
    ${Size({ minWidth: '4.5vw' })}
    ${WH({ all: '4.5vw' })}
    background-color: #e8e8e8;
    text-align: center;
    line-height: 4.5vw;
    ${BorderRadius({ all: '3.12vw' })}
    ${Transition({ properties: 'all', time: '0.2s' })};
    box-sizing: border-box;
    
   
   
}   
  ul li:not(:last-child) span{
    display: block;
    overflow: hidden;
    padding: 0 2.1vw 0 3.25vw;
    background-color:${BackgroundColor.backgroundColorFourth};
    text-align: center;
    line-height: 4.5vw;
    box-sizing: border-box;
    ${Transition({ properties: 'all', time: '0.2s' })}
    ${Size({ minWidth: '4.5vw' })};
    ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeK, fontWeight: 'bold' })};
    ${WH({ width: '17vw', height: '4.5vw' })};
    ${BorderRadius({ all: '3.12vw' })};
    
    &:hover {
    ${WH({ width: '20vw' })}
    ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeK, fontWeight: 'bold' })};
    background-color: #77c2a5;
    ${BaseShadow(BaseBoxShadow.boxShadowBase)}
    
}

  }
`
/**
 * Icon
*/



export const TripText = styled.div`
  display: flex;
  ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeXL, fontWeight: 'bold' })};
  ${Margin({ all: 'auto' })};
  ${Padding({ right: '2vw' })};
  ${Border({ right: '.0667vw solid #fff' })}
  ${BaseShadow('.0625rem 0 .0625rem -0.0625rem #000')}
  
  ${media.tablet} {
    ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeS, fontWeight: 'bold' })};
}
  ${media.phone} {
    ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeS, fontWeight: 'bold' })};
}
  `;

export const DescribeText = styled.div`

  ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeK })}
  ${Margin({ right: '2.6667vw' })}
  ${media.desktop} {
    ${WH({ width: '80%' })};
    ${Margin({ right: '1vw' })}
    ${Ellipsis({ webkitLinCclamp: '2' })};
  }
  ${media.tablet} {
    ${WH({ width: '80%' })};
    ${Margin({ right: '1vw' })}
    ${Ellipsis({ webkitLinCclamp: '2' })};
  }
  ${media.phone} {
    ${WH({ width: '80%' })};
    ${Margin({ right: '1vw' })}
    ${Ellipsis({ webkitLinCclamp: '2' })};
  }
  `;

export const MoreText = styled.div`
  display: flex;
  ${Margin({ all: 'auto' })}
  ${Padding({ right: '2vw' })}
  ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeK })}
  
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
  ${WH({ width: '100%', height: '19vw' })};
  ${Margin({ top: '2vw' })};
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })};
  cursor: pointer;
  transition:all .3s;

  &:hover {
    transform: translate(0,-0.625rem);;
    ${BaseShadow(BaseBoxShadow.boxShadowBase)}
    ul li:nth-child(2){
      display: none;
    } 
    ul li:last-child{
    display: block;  
    }
    }

  ${media.tablet} {
    ${Margin({ top: '3vw' })};
  }

  ${media.phone} {
   ${Margin({ top: '4vw' })};
  }
`;

export const HotGoodsImg = styled.div` 
  background-color: ${BackgroundColor.backgroundColorFourth};
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
    
    ${WH({ height: '20vw' })};
    
  }
`;

export const Hot = styled.button`
  ${FlexBox}
  ${Absolute({ top: '1.25vw', right: '1.25vw' })}
  ${WH({ all: '2.5vw' })};
  z-index: ${ZIndex.indexNormal};
  ${BorderRadius({ all: BorderRadiusBase.borderRadiusCircle })};  
  background-color:${BackgroundColor.backgroundColorprimary};
  border: 0 solid palevioletred;

  ${media.tablet} {
    ${WH({ all: '3vw' })};
  }
  ${media.phone} {
    ${WH({ all: '3vw' })};
  }
  `;

export const Heart = styled(HeartTwoTone)`
 
  ${Font({ size: FontSizes.sizeM })}

  `;
export const Buttondisplay = styled(Button)`

 ${Margin({ all: '.5vw' })}
 ${Font({ color: FontColor.colorFontGrey, size: FontSizes.sizeJ, fontWeight: 'bold' })};
 
  `;
export const HotGoodsWord = styled.div`

  text-align: center;
  ${BorderRadius({ bottomLeft: BorderRadiusBase.bordeRadiusBase, bottomRight: BorderRadiusBase.bordeRadiusBase })}; 
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeK })};
  background-color:${BackgroundColor.backgroundColorFourth};
  ul {
    ${Padding({ all: '0' })};
    ${Margin({ all: '0' })};
    ${WH({ height: '6vw' })};

    ${media.tablet} {

      ${WH({ height: '8vw' })};

  }
    ${media.phone} {
   
      ${WH({ height: '15vw' })};
    
  }
  }
  ul li:first-child{
    ${WH({ width: '90%' })};
    ${Margin({ top: '.5vw' })}
    ${Ellipsis({ webkitLinCclamp: '1' })}
  };
  ul li:nth-child(2){
    display: block;
    ${WH({ width: '90%' })};
    ${Font({ color: FontColor.colorFontGrey, size: FontSizes.sizeJ, fontWeight: 'bold' })};
    ${Ellipsis({ webkitLinCclamp: '1' })}
  };
  ul li:last-child{
    display: none;
     ${WH({ width: '100%' })};
     
  };
  ul li button:first-child{
    ${media.tablet} {
   
      display: none;
    
     }
    ${media.phone} {
   
     display: none;
    
    }
     
  };
  
  `;
