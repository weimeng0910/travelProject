/*
 * @Date: 2023-06-30 19:44:30
 * @Description: Homepage-css
 */
import styled from 'styled-components/macro';
import media from "@/styles/tools/media";
import { px2vw } from '@/common/hooks';
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

export const Container = styled.div`
   ${Margin({ x: 'auto', y: '0' })};
   ${WH({ all: '100%' })};
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
  flex:1;
  ${Margin({ x: 'auto' })};
  ${Padding({ x: '3px' })};
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })};
  background-color:${BackgroundColor.backgroundColorSecondary};
 
  
 
`;

export const SearchlBox = styled.div`
   ${FlexBox({ flexWrap: 'wrap', alignContent: 'stretch' })};
   flex:1;
   ${WH({ width: '100%' })};   
`;
export const CarouselBox = styled.div`
   ${FlexBox};
   flex:1;
   ${Margin({ all: '0' })};

`;

export const HotGoodslBox = styled.div`
   ${FlexBox};
   flex:1;
   ${Margin({ all: '0' })};
  
`;
export const BestChoiceBox = styled.div`
   ${FlexBox};
   flex:1;
   ${WH({ width: '100%' })}; 
   ${Margin({ top: '15px' })};
   /*height: clamp(60px, 30vw, 280px);*/
   
  
`;
export const TravelersChoiceBox = styled.div`
   ${FlexBox({ spacing: 'strat', direction: ' column' })};
   flex:1;
   justify-content:flex-start;
   width: 100%;
   height: clamp(20px, 4vw, 40px);
   ${Margin({ top: '10px' })};
   ${Padding({ all: '0' })};
  
`;
export const RestaurantsBox = styled.div`

   ${FlexBox};
   flex:1;
   ${WH({ width: '100%' })}; 
   ${Margin({ all: '0' })};
   ${Padding({ all: '0' })};
 
   
`;