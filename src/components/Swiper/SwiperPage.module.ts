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
  border-radius: 17px;
 ${media.tablet} {
   
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
  
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  ${media.tablet} {
    margin-bottom: 30px;
   
    font-size: 8px;
  }

`
export const CarouseKommentar = styled.h2`
  display: grid;
  justify-content: center;
  align-content: center;
  margin:0;
  font-size: 14px;
  text-align: center;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  ${media.tablet} {
    margin-bottom: 30px;
   
    font-size: 8px;
  }

`
export const CarouseRunden = styled.div`
  display: grid;
  border-radius:50%;//圆型
  width: 16px;
  height: 16px;
  background:#00AA6C;
  opacity:0.6;
  justify-content: center;
  align-content: center;
  ${media.tablet} {
    margin-bottom: 30px;
   
    font-size: 8px;
  }

`
export const CarouselDescription = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr 20px 1fr;
  /*列间距*/
  grid-column-gap: 10px;
  justify-items:center;
  align-items: center;
  width: 100%;
 
  margin-bottom:40px;
  ${media.tablet} {
    display: none;
  }
  
 

`