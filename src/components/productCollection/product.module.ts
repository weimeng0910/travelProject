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
  Absolute
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
  display: flex;
  flex-flow:column nowrap;
 
  ${media.tablet} {
    width:90vw; 
  }

  ${media.phone} {
    width:90vw;
    
  }

`;
/**
 * text
*/
export const TitleBox = styled.div`
  ${GridBox({ gridTemplateColumns: '1fr 1fr 5vw' })}
  align-items: center;
  ${BorderRadius({ all: BorderRadiusBase.borderRadiusSmall })};
  background-color:${BackgroundColor.backgroundColorprimary};
  width: 100%;
  height: 8vw;
  ${media.desktop} {
   ${GridBox({ gridTemplateColumns: '30vw 1fr 10vw' })}
   height: 8vw;
  }

  ${media.tablet} {
   ${GridBox({ gridTemplateColumns: '30vw 1fr 10vw' })}
   height: 10vw;
  }

  ${media.phone} {
    height: 10vw;
  }
`;

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
    width: 80%;
    ${Margin({ right: '1vw' })}
    ${Ellipsis({ webkitLinCclamp: '2' })};
  }
  ${media.tablet} {
    width: 80%;
    ${Margin({ right: '1vw' })}
    ${Ellipsis({ webkitLinCclamp: '2' })};
  }
  ${media.phone} {
    width: 80%;
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
  width: 100%;
  `;

export const ProductBox = styled.div`
  display: grid;
  grid-template-rows:2fr 1fr;
  position: relative;
  width: 100%;
  ${Margin({ top: '2vw' })};
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })};
  cursor: pointer;
  height: 19vw;
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
  ${FlexBox({ spacing: 'center' })}
  ${BorderRadius({ topLeft: BorderRadiusBase.bordeRadiusBase, topRight: BorderRadiusBase.bordeRadiusBase })};
  ${Margin({ y: '0', x: 'auto' })}
  width: 100%;
  height:16vw;
  ${media.tablet} {
  height:18vw;

  }
  ${media.phone} {
    
    height: 20vw;
    
  }
`;

export const Hot = styled.button`
  ${FlexBox({ spacing: 'center' })}
  ${Absolute({ top: '1.25vw', right: '1.25vw' })}
  width: 2.5vw;
  height:2.5vw;
  z-index: ${ZIndex.indexNormal};
  ${BorderRadius({ all: BorderRadiusBase.borderRadiusCircle })};  
  background-color:${BackgroundColor.backgroundColorprimary};
  border: 0 solid palevioletred;

  ${media.tablet} {
    width: 3vw;
    height: 3vw;

  }
  ${media.phone} {
    width: 3vw;
    height: 3vw;
    
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
    margin: 0;
    padding: 0;  
    height: 6vw;
    ${media.tablet} {
   
    height: 8vw;

  }
  ${media.phone} {
   
    height: 15vw;
    
  }
  }
  ul li:first-child{
    width: 90%;
    ${Margin({ top: '.5vw' })}
    ${Ellipsis({ webkitLinCclamp: '1' })}
  };
  ul li:nth-child(2){
    display: block;
    width: 90%;
    ${Font({ color: FontColor.colorFontGrey, size: FontSizes.sizeJ, fontWeight: 'bold' })};
    ${Ellipsis({ webkitLinCclamp: '1' })}
  };
  ul li:last-child{
    display: none;
    width: 100%;
     
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
