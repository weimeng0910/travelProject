import styled from 'styled-components/macro';
import media from "@/styles/media";
/**
 * @date 2023/06/30
 * @description Homepage-css
 */

export const Container = styled.div`

  display: flex;
  margin-top: 10px;
  
  flex-direction: row;
  justify-content: flex-start;
  
`;
export const MenuLayout = styled.div`
 
  margin-left: 10px;
  padding: 4px 14px;
  
  flex: 0;
  border-radius: 25px;
  background-color: #f5f6fa;
  ${media.phone} {
   display: none;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: stretch;
  flex:1;
  margin:0 10px;
  
  padding: 4px 14px;
  border-radius: 25px;
  /*height:100vh;*/
  background-color: #F5FAF8;
 

`;

export const CarouselBox = styled.div`
   display: flex;
   margin: 0px;
   justify-content: center;
   align-content: stretch;
  /*width: 100%;*/
   /*background-color: #fff;*/
  /*height: 300px;*/
  

     
`;
export const FontBox = styled.div`
   
    width: 150px;
    
    background: red;
    cursor: pointer;
    height: 300px;
    transition:all 0.4s;
  
  
    &:hover {
       box-shadow: 0 8px 8px 0  gray;
       transform: translate(0,-10px);
       }
     
`;
export const InnerH3 = styled.h3`
      
      background: #fff;
     
`;