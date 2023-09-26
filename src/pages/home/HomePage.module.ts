import styled from 'styled-components/macro';
import media from "@/styles/tools/media";
import { BorderRadius, BaseShadow } from '@/styles/tools/logicalMixins';
import { BorderRadiusBase, Color, BackgroundColor, BaseBoxShadow } from '@/styles/settings/var'
/**
 * @date 2023/06/30
 * @description Homepage-css
 */

export const Container = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex:1;
  ${media.tablet} {
    justify-content: space-between;

  }

`;
export const MenuLayout = styled.div`
 
  margin-left: 1.39vw;
  padding: 2.1333vw 1.8667vw;
  height: 160vw;
  flex: 0;
  
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })}
  background-color: #f5f6fa;
  ${media.tablet} {
   display:block;
  }
  ${media.phone} {
   display: none;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-self:auto;
  flex:1;
  margin:0 2.1333vw;
  padding: .5333vw 1.8667vw;
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })}
  background-color:${BackgroundColor.backgroundColorSecondary}
   ${media.tablet} {
    justify-content: space-between;
    
  }
`;
export const SearchlBox = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: flex-start;
   margin: 0rem;
   justify-content: center;
   align-content: stretch;
   
   width: 100%;    
`;
export const CarouselBox = styled.div`
   display: flex;
   margin: 0rem;

   justify-content: center;
   align-content: stretch;
   width: 100%;    
   height:18vw
   
`;
export const FontBox = styled.div`
    width: 20vw;
    background: red;
    cursor: pointer;
    height: 33.3333vw;
    transition:all 0.4s;
    &:hover {
       /*box-shadow: 0 .5rem .5rem 0  gray;*/
       ${BaseShadow(BaseBoxShadow.boxShadowDark)}
       transform: translate(0,-0.625rem);
       }

`;
export const InnerH3 = styled.h3`
      
      background: #fff;
     
`;
export const HotGoodslBox = styled.div`
   display: flex;
   margin: 0px;
   /*background-color: red;*/
   width: 100%;   
  
`;