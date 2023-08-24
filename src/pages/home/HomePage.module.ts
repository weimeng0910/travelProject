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
  /*height: 100vh;*/
  flex: 0;
  border-radius: 25px;
  background-color: #f5f6fa;
  ${media.phone} {
   display: none;
  }
`;

export const MainLayout = styled.div`
  flex:1;
  
  margin-left: 10px;
  margin-right: 10px;
  padding: 4px 14px;
  border-radius: 25px;
  /*height:100vh;*/
  background-color: #F5FAF8;
 

`;
export const SwiperBox = styled.div`
perspective: 25px;
  margin-top: 20px;
  width: 100%;
  margin: 0 auto;
  height: 200px;
 
  ${media.phone} {
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
      
      
       /*& img{
        width: 100%;
        height: 100%;
       transition: all 0.6s; //设置动画执行的时间为0.6s
       cursor: pointer;
       }
        & img:hover {
        transform: scale(1.3); //设置图片按照比例放大1.3倍
       }*/
`;