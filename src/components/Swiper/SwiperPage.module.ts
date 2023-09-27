import styled from 'styled-components';
import { Swiper, SwiperSlide ,} from 'swiper/react';
// import { Scrollbar } from 'swiper';

import media from "@/styles/tools/media";
import { BorderRadius} from '@/styles/tools/logicalMixins';
import { BorderRadiusBase} from '@/styles/settings/var'
/**
 * @date 2023/06/22
 * @description Swiper Css
 */


export const MySwiper = styled(Swiper)`
   width:100%;
`
export const MySwiperSlide = styled(SwiperSlide)`
  width:100%;
`
export const Container = styled.div`
  display: flex;
  position:absolute;
  width:65vw;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: .625rem auto;
  overflow: hidden !important;
  border-color: white;
  ${media.tablet} {
   
   width:95vw;
   }
 ${media.phone} {
   
  width:95vw;
  }
 
`
export const CarouseImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width:18vw;
  border-radius: 1.0625rem;
  ${media.tablet} {
   
   width:28vw;
   }
 ${media.phone} {
   
  width:28vw;
  }

`
export const CarouseFont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65vw;
`
export const CarouseTitle = styled.h2`
  
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  ${media.tablet} {
    margin-bottom: 1.875rem;
   
    font-size: .5rem;
  }

`
export const CarouseKommentar = styled.h2`
  display: grid;
  justify-content: center;
  align-content: center;
  margin:0;
  font-size: .875rem;
  text-align: center;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  ${media.tablet} {
    margin-bottom: 1.875rem;
   
    font-size: .5rem;
  }

`
export const CarouseRunden = styled.div`
  display: grid;
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })};
  width: 1rem;
  height: 1rem;
  background:#00AA6C;
  opacity:0.6;
  justify-content: center;
  align-content: center;
  ${media.tablet} {
    margin-bottom: 1.875rem;
   
    font-size: .5rem;
  }

`
export const CarouselDescription = styled.div`
  display: grid;
  grid-template-columns: 1.25rem 1fr 1.25rem 1fr;
  /*列间距*/
  grid-column-gap: .625rem;
  justify-items:center;
  align-items: center;
  width: 70%;
 
  margin-bottom:2.5rem;
  ${media.tablet} {
    display: none;
  }
`

export const CarouselMoney = styled.i`
        font-size: .75rem;
        line-height: 1.2;
        color: #b2b2b2;

`
