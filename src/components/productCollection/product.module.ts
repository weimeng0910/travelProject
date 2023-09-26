import styled, { keyframes } from 'styled-components';

import media from "@/styles/tools/media";
/**
 * @date 2023/09/04
 * @description ProductCollection Css
 */

export const Container = styled.div`
  display: flex;
  flex-flow:column nowrap;
  width: 100%;
  
  /*background-color: red;*/
`
export const TitleBox = styled.div`
  display: grid;
  grid-template-columns:15.625rem 1fr 6.25rem;
  align-items: center;
  border-radius: .5rem;
  background-color:#16A085;
  width: 100%;
  height: 5rem;
`
export const WorldText = styled.h1`
  
  font-size: 1.375rem;
  color: #fff;
  text-align: center;
  /*text-align: center;*/
  margin:0 1.25rem 0 0;
  border-right: .0313rem solid #fff;
  box-shadow: .0625rem 0 .0625rem -0.0625rem #000;
  `
export const DescribeText = styled.h1`
  
  font-size: .75rem;
  color: #FFF;
  /*text-align: center;*/
  margin:0 1.25rem 0 0;
  `
export const HotGoodsBox = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  align-items: center;
  grid-column-gap: .625rem;
  `
export const ImgBox = styled.div`

    display: grid;
    position: relative;
    grid-template-rows:2fr 1fr;
    margin-top: .9375rem;
    width: 100%;
    border-radius: .75rem;
    background: #fff;
    cursor: pointer;
    height: 18.75rem;
    transition:all 0.4s;
    &:hover {
       box-shadow: 0 .3125rem .3125rem 0  gray;
       transform: translate(0,-0.625rem);
       }
     
`;
export const HotGoodsImg = styled.div`
  
  border-radius: .75rem .75rem 0 0;
  background-color: #F5F7FA;
  `
export const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
 
  width: 100%;
  

`
export const Hot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height:30px;
  z-index: 1;
  
  border-radius: 50%;   
  background:#00AA6C;
  opacity:0.6;
  `
export const HotGoodsWord = styled.div`
  border-radius: 0 0 12px 12px;   
  background-color: #fff;
  `
