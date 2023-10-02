import styled from 'styled-components/macro';
import media from "@/styles/tools/media";
import { BorderRadius, BaseShadow } from '@/styles/tools/logicalMixins';
import { BorderRadiusBase, BackgroundColor, BaseBoxShadow } from '@/styles/settings/var'
/**
 * @date 2023/06/30
 * @description Homepage-css
 */

export const Container = styled.div`
   
  display: flex;
  flex-direction: row;
  width: 100vw;
 
  flex:1;
  

`;
export const MenuLayout = styled.div`
 
  margin-left: 1.3vw;
  padding: 2.1333vw 1.8667vw;
  height: 160vw;
  flex: 0;
  
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })}
  background-color:${BackgroundColor.backgroundColorTertiary};
  ${media.tablet} {
   display: none;
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
  height: 160vw;
  margin:0 2.1333vw;
  padding: .5333vw 1.8667vw;

  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })};
  background-color:${BackgroundColor.backgroundColorSecondary};

   ${media.tablet} {
    width: 100vw;
   
    
    
  }
  ${media.phone} {
    width: 100vw;
  
    
  }
`;
export const SearchlBox = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: flex-start;
   justify-content: center;
   align-content: stretch;
   
   width: 100%;    
`;
export const CarouselBox = styled.div`
   display: flex;
   justify-content: center;
   align-content: stretch;
   height:20vw;
   margin:0;
   ${media.tablet} {
    height:10vw;
    margin-bottom:10vw ;
    
    
  }
  ${media.phone} {
    height:18vw;
    margin-bottom:10vw ;
    
  }
`;
export const FontBox = styled.div`
    width: 20vw;
    background: red;
    cursor: pointer;
    height: 33.3333vw;
    transition:all 0.4s;

    &:hover {
      
       transform: translate(0,-0.625rem);
       ${BaseShadow(BaseBoxShadow.boxShadowDark)}
       
       }

`;
export const InnerH3 = styled.h3`
      
  background-color:${BackgroundColor.backgroundColorFourth};
     
`;
export const HotGoodslBox = styled.div`
   display: flex;
   margin: 0px;
  
`;