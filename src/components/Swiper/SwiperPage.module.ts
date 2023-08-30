import styled, { keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import media from "@/styles/media";
/**
 * @date 2023/06/22
 * @description Swiper Css
 */
type OffsetProps = {
  offset: string;
}
export const MaskingLeft = styled.div<OffsetProps>`
left: ${(props: OffsetProps) => `${-props.offset}px`};
`

export const MySwiper = styled(Swiper)`
   width:100%;
`
export const MySwiperSlide = styled(SwiperSlide)`
   width:100%;
`
export const Container = styled.div`
  display: flex;
  position:absolute;
  width:60%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 10px auto;
  /*max-width: 50vw;*/
  /*width: auto !important;*/
  /*width: 100%;*/
  overflow: hidden !important;
  border-color: white;
  ${media.tablet} {
   
    width: 70%;
  }
`
export const CarouseImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 50%;
  width: 70%;
  border-radius: 5%;
 ${media.tablet} {
    height: 50%;
    width: 80%;
  }

`
export const CarouseFont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`
export const CarouseTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  /*margin-left: 60px;*/
  font-size: 18px;
  text-align: center;
  
  ${media.tablet} {
    font-size: 12px;
  }

`
export const CarouselDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /*margin: 0 20px ;*/
  width: 90%;
  font-size: 12px;
  ${media.tablet} {
    display: none;
  }
  
 

`