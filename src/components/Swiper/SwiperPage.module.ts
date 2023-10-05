import styled from 'styled-components';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { BorderRadius } from '@/styles/tools/logicalMixins'
import { Color, BorderBase, BorderRadiusBase, BackgroundColor } from '@/styles/settings/var';

import media from "@/styles/tools/media";

/**
 * @date 2023/06/22
 * @description Swiper Css
 */


export const MySwiper = styled(Swiper)`
  width: 58vw;
  /* 切换 */
  .swiper-pagination {
     &-bullet {
        cursor: pointer;
        width: 1.3333vw;
        height: 1.3333vw;
        display: inline-block;
        ${BorderRadius({ all: BorderRadiusBase.borderRadiusCircle })};
        background-color:${BackgroundColor.backgroundColorGrey};
        opacity: 0.2;
        border: ${BorderBase.borderFourth};
        margin: 0 5px;
        box-shadow: none;
        transition: all 0.4s ease 0s;
        transform: scale(0.8);
        &:hover, &-active {
          background-color:${BackgroundColor.backgroundColorprimary};
          border-color: ${Color.colorPamary};
          transform: scale(1.0);
          opacity: 1;
        }
      }
    }
    ${media.tablet} {
   
     width:95vw;
    }
    ${media.phone} {
   
     width:90vw;
    }    
`;


export const MySwiperSlide = styled(SwiperSlide)`
  width:100vw;
   .swiper-slide{
      width: 20vw !important;
            
    }
    
   
`;
export const Container = styled.div`
  display: flex;
  position:absolute;
  width:65vw;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 1.3333vw auto;
  overflow: hidden !important;
  border-color: white;
  ${media.tablet} {
   
   width:95vw;
   }
 ${media.phone} {
   margin-top: 4vw;
   width:95vw;
  }
 
`;
export const CarouseImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width:18vw;
  height: 12vw;
  overflow: hidden !important;
  border-radius: 1.5vw;
  ${media.tablet} {
   
   width:20vw;
   height: 16vw;
   }
 ${media.phone} {
   
  width:27vw;
  height: 16vw;
  }

`
export const CarouseFont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65vw;
`
export const CarouseTitle = styled.div`
  
  font-size: 1.2vw;
  font-weight: bold;
  text-align: center;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  ${media.tablet} {
    margin-bottom: 6vw;
   
  }
    ${media.phone} {
    margin-bottom: 7vw;
   
  }
`;
export const MyPin = styled.div`
  width:.4vw;
  height: .4vw;
`;
export const CarouseKommentar = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  margin:0;
  font-size: 1.8667vw;
  text-align: center;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  ${media.tablet} {
    margin-bottom: 2vw;
   
  }

`
export const CarouseRunden = styled.div`
  display: grid;
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })};
  width: 1vw;
  height: 1vw;
  background:#00AA6C;
  opacity:0.6;
  justify-content: center;
  align-content: center;

`;
export const CarouselDescription = styled.div`
  display: grid;
  grid-template-columns: 2.6667vw 1fr 2.6667vw 1fr;
  /*列间距*/
  grid-column-gap: 1.3333vw;
  justify-items:center;
  align-items: center;
  width: 90%;
 
  margin-bottom:2.5rem;
  ${media.tablet} {
    display: none;
  }
  ${media.phone} {
    display: none;
  }

`

export const CarouselMoney = styled.i`
        font-size: .6vw;
        line-height: 1.2;
        color: #b2b2b2;

`
