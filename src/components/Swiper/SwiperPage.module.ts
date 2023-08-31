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
  width:50%;
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
 
  width: 100%;
  border-radius: 8%;
 ${media.tablet} {
    /*height: 50%;*/
    width: 100%;
  }

`
export const CarouseFont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const CarouseTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  /*margin-left: 60px;*/
  font-size: 18px;
  text-align: center;
  
  ${media.tablet} {
    margin-bottom: 30px;
    /*overflow: hidden !important;*/
    font-size: 8px;
  }

`
export const CarouselDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /*margin: 0 20px ;*/
  width: 90%;
  font-size: 12px;
  text-align: center;
  margin-bottom:30px;
  ${media.tablet} {
    display: none;
  }
  
 

`