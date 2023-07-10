import styled from 'styled-components/macro';
import media from "@/styles/media";
/**
 * @date 2023/06/30
 * @description Homepage-css
 */

export const Container = styled.div`
  
  margin-top: 10px;
  
`;
export const MenuLayout = styled.div`
  
  
  margin-left: 10px;
  border-radius: 25px;
  padding: 4px 14px;
  
  width: 40%;
  height: 800px;
  background-color: #f5f6fa;
  ${media.tablet} {
   display: none;
  }
`;

export const MainLayout = styled.div`
  flex-flow: row wrap;
  margin-left: 10px;
  border-radius: 25px;
  padding: 4px 14px;
  width: 100%;
  height:800px;
  background-color: #F5FAF8;
     
`;
export const SwiperBox = styled.div`
perspective: 25px;
  margin-top: 20px;
  width: 100%;
  margin: 0 auto;
  height: 200px;
  ${media.tablet} {
    /* 栅格的列 */
    margin-top:20px;
  }

`;
export const CarouselBox = styled.div`
  margin-top: 20px;
  width: 100%;
  margin: 0 auto;
  border-radius: 25px;
  height: 300px;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  -webkit-transition: transform 0.5s;
  -moz-transition: transform 0.5s;
  -o-transition: transform 0.5s;
     
`;
export const FontBox = styled.div`
    perspective: 25px;
    width: 100%;
    height: 130px;
    background: red;
    
     
`;
export const InnerH3 = styled.h3`
   width: 20em;
  height: 18em;
  background-color: white;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  -webkit-transition: transform 0.5s;
  -moz-transition: transform 0.5s;
  -o-transition: transform 0.5s;
`;