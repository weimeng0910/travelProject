import styled from 'styled-components/macro';
import media from "@/styles/media";
/**
 * @date 2023/06/30
 * @description Homepage-css
 */

export const Container = styled.div`

  display: flex;
  margin-top: .625rem;
  flex-direction: row;
  justify-content: flex-start;
 
`;
export const MenuLayout = styled.div`
 
  margin-left: .625rem;
  padding: .25rem .875rem;
  height: 75rem;
  flex: 0;
  border-radius: 1.5625rem;
  background-color: #f5f6fa;
  ${media.phone} {
   display: none;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  
  justify-content: flex-start;
  align-self:auto;
  /*align-content: stretch;*/
  flex:1;
  margin:0 .625rem;
  padding: .25rem .875rem;
  border-radius: 1.5625rem;
  background-color: #F5FAF8;
  
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
   height: 15.625rem
   
`;
export const FontBox = styled.div`
    width: 9.375rem;
    background: red;
    cursor: pointer;
    height: 15.625rem;
    transition:all 0.4s;
    &:hover {
       box-shadow: 0 .5rem .5rem 0  gray;
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