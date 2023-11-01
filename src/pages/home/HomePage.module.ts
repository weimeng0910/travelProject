/*
 * @Date: 2023-06-30 19:44:30
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-01 17:34:52
 * @FilePath: /travelProject/src/pages/home/HomePage.module.ts
 * @Description: Homepage-css
 */
import styled from 'styled-components/macro';
import media from "@/styles/tools/media";
import { px2vw } from '@/utils';
import {
  BorderRadius,
  Padding,
  Margin,
  FlexBox,
  WH,

} from '@/styles/tools/logicalMixins';
import {
  BorderRadiusBase,
  BackgroundColor,
} from '@/styles/settings/var';

/**
 * Homepage-css
 */
export const Container = styled.div`
   ${Margin({ x: 'auto', y: '0' })};
   ${WH({ width: '100%' })};
   max-width:1220px;
  
   ${media.bigdesktop} {
       width:${px2vw(1200, 1280)} ;    
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
export const MainLayout = styled.div`
 
  ${FlexBox({ direction: 'column', flexWrap: 'nowrap', spacing: 'flex-start' })};
  ${Padding({ x: '3px' })};
  ${Margin({ x: 'auto' })};
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })};
  background-color:${BackgroundColor.backgroundColorSecondary};
  height: 1800px;
`;

export const SearchlBox = styled.div`
   ${FlexBox({ flexWrap: 'wrap', alignContent: 'stretch' })};
   ${WH({ width: '100%' })};   
`;
export const CarouselBox = styled.div`
   ${FlexBox};
   ${Margin({ all: '0' })};

`;

export const HotGoodslBox = styled.div`
   ${FlexBox};
   ${Margin({ all: '0' })};
  
`;
export const DateSearchBox = styled.div`
   ${FlexBox({ spacing: 'strat' })};
   ${WH({ width: '100%' })}; 
   ${Margin({ all: '0' })};
   ${Padding({ all: '0' })};
 
   
`;
export const RestaurantsBox = styled.div`
   ${FlexBox};
   ${WH({ width: '100%' })}; 
   ${Margin({ all: '0' })};
   ${Padding({ all: '0' })};
 
   
`;