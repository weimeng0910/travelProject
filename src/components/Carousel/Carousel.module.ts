import styled, { keyframes } from 'styled-components';
import { Cdn, Mith, Mana, Blz } from '@styled-icons/crypto';
import media from "@/styles/media";
/**
 * @date 2023/06/27
 * @description Carousel Css
 */

//icon
export const WhiteCdn = styled(Cdn)`
  
  /*position: absolute;*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
  color: #1abc9c;
  width: 35px;
  height: 35px;
  ${media.tablet} {
    width: 30px;
    
    height: 30px;
    transform: translate(-50%, -50%);
  }

`
export const WhiteMana = styled(Mana)`
  
  /*position: absolute;*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
  color: #1abc9c;
  width: 35px;
  height: 35px;
  ${media.tablet} {
    width: 30px;
    
    height: 30px;
    transform: translate(-50%, -50%);
  }

`
export const WhiteBlz = styled(Blz)`
  
  /*position: absolute;*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
  color: #1abc9c;
  width: 35px;
  height: 35px;
  ${media.tablet} {
    width: 30px;
    
    height: 30px;
    transform: translate(-50%, -50%);
  }

`
export const WhiteMith = styled(Mith)`
  
  /*position: absolute;*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
  color: #1abc9c;
  width: 35px;
  height: 35px;
  ${media.tablet} {
    width: 30px;
    
    height: 30px;
    transform: translate(-50%, -50%);
  }

`

const innerFrame = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;
export const SwiperBox = styled.div`
  display: flex;
  ${media.tablet} {
    width: 80%;
    height: 60%;
  }

`;
export const SwiperBarBox = styled.div`
  display: flex;
  /*margin-left:20px;*/
  ${media.tablet} {
    margin-top: 80px;
  }
`;
export const Carousel = styled.div`
/*display: flex;*/
  overflow: hidden;
  border-radius: 20px;
 ${media.tablet} {
    width: 80%;
    height: 60%;
  }
`;

export const CarouselItem = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: #fff;
  /*background-image:url() center no-repeat;*/
  ${media.tablet} {
    width: 80%;
    height: 40%;
    
  }
`;
//显示给大家的样式
export const Inner = styled.div`
 
  display:inline-flex;
  vertical-align:center;
  transition: all 0.5s ease;
   //不同浏览器下的动画
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  
`;
export const Ndicators = styled.div`

  display: flex;
  justify-content: center;
  
`;


/*分页器容器*/
export const SwiperSlideBar = styled.div`
  display: flex;
  flex-direction:column; 
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
 
`;

/*分页器中点击按钮*/
export const SwiperSlideBarItem: any = styled.div`

  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 4px;
  position: relative;
  background-color: #ecf0f1;
  border: none;
  color: #fff;
  padding: 20px;
  margin: 12px 0;
  width: 50px;
  height: 50px;
  border-radius:50%;//圆型
  align-items: center;
  
  /*text-align: center;*/
  transition-duration: 0.4s;
  overflow: hidden;
  box-shadow: 0 0.5px 15px #95a5a6;
 
  &:after {
  content: "";
  background: #1abc9c;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.6s
  }
  &:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}
  &:hover {
  background: #fff;
  box-shadow: 0px 2px 4px 2px #1abc9c;
  color: #000;
  }
  &:focus {
      outline:0;
    }
  ${media.tablet} {
  
   width: 2rem;
   height: 2rem;
  }
`;
/*分页器容器的按钮进度条*/
export const SlideBarInner = styled.div`
    position: relative;
    width: 100%;
    z-index: 1;
    text-align: center;
    transition: transform 0.5s ease;
 
`;
/*文字内容*/
export const TextDescription = styled.div`
    display: flex;
    flex-direction:column; 
    /*margin-top:10px;*/
    margin: 20px 20px 20px 0;
    z-index: 1;
   ${media.tablet} {
     display: none;
     
  }


`;