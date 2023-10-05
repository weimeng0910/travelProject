import styled from 'styled-components/macro';
import media from "@/styles/tools/media";
import {
  BorderRadius,
  BaseShadow,
  Padding,
  Margin,
  FlexBox,
  WH,
  flexGap,
  Transition,
} from '@/styles/tools/logicalMixins';
import {
  BorderRadiusBase,
  BackgroundColor,
  BaseBoxShadow,
} from '@/styles/settings/var';

/**
 * @date 2023/06/30
 * @description Homepage-css
 */

export const Container = styled.div`
  ${FlexBox};
  ${WH({ width: '100vw' })};
 
`;
/**
 * Menu
*/
export const MenuLayout = styled.div`
  ${Margin({ left: '1.3vw' })};
  ${Padding({ x: '2.1vw', y: '1.8vw' })}
  ${WH({ height: '160vw' })};
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })}
  background-color:${BackgroundColor.backgroundColorTertiary};
  ${media.tablet} {
     display: none;
  }
  ${media.phone} {
     display: none;
  }
`;
export const WordBox = styled.div`
    ${WH({ width: '20vw', height: '33.3333vw' })};
    background: red;
    cursor: pointer;

    ${Transition({ properties: 'all', time: '0.4s' })};
    &:hover {
      transform: translate(0,-0.625rem);
     
      ${BaseShadow(BaseBoxShadow.boxShadowDark)}
       
       }

`;
export const InnerH3 = styled.h3`
      
  background-color:${BackgroundColor.backgroundColorFourth};
     
`;
/**
 * Main
*/
export const MainLayout = styled.div`
  /**  flex属性是flex-grow, flex-shrink 和 flex-basis的简写，
  * flex-basis就是分配固定的家产数量。
  * flex-grow就是家产剩余家产仍有富余的时候该如何分配。
  * flex-shrink就是家产剩余家产不足的时候该如何分配 
  * 默认值为0 1 auto。后两个属性可选。
  * 这里表示伸缩
  * align-self 属性用来设置项目在交叉轴方向上的对齐方式，设置在项目上，作用单个项目
  */
  flex:1;
  align-self:auto;
  ${flexGap('1vw')}
  ${FlexBox({ direction: 'column', flexWrap: 'nowrap', spacing: 'flex-start' })};
  ${WH({ height: '160vw' })};
  ${Margin({ x: '1vw' })};
  ${Padding({ x: '1vw', y: '1.7vw' })}
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })};
  background-color:${BackgroundColor.backgroundColorSecondary};
   ${media.tablet} {
    ${WH({ width: '100vw' })};
    
  }

  ${media.phone} {
    ${WH({ width: '100vw' })};
    
  }
`;

export const SearchlBox = styled.div`
   ${FlexBox({ flexWrap: 'wrap', alignContent: 'stretch' })};
   ${WH({ width: '100%' })};   
`;
export const CarouselBox = styled.div`
   ${FlexBox};
   ${WH({ height: '18vw' })};
   ${Margin({ all: '0' })};
   ${media.tablet} {
    ${WH({ height: '23vw' })};
  }

  ${media.phone} {
    ${WH({ height: '25vw' })};
  }
`;

export const HotGoodslBox = styled.div`
   ${FlexBox};
   ${Margin({ all: '0' })};
  
`;
export const DateSearchBox = styled.div`
   ${FlexBox};
   ${WH({ width: '100%', height: '5vw' })}; 
   ${Margin({ all: '0' })};
   ${Padding({ all: '0' })};
 
   
`;