import styled from 'styled-components';
import { BorderRadius, Font } from '@/styles/tools/logicalMixins';
import { BorderRadiusBase, BackgroundColor, FontColor, FontSizes } from '@/styles/settings/var'
import media from "@/styles/tools/media";
/**
 * @date 2023/09/04
 * @description ProductCollection Css
 */

export const Container = styled.div`
  display: flex;
  flex-flow:column nowrap;
  width:67vw;
  ${media.tablet} {
    width:90vw; 
  }

  ${media.phone} {
    width:90vw;
    
  }

`
export const TitleBox = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 5vw;
  align-items: center;
  
  ${BorderRadius({ all: BorderRadiusBase.borderRadiusSmall })};
  background-color:${BackgroundColor.backgroundColorprimary};
  width: 100%;
  height: 10vw;
  ${media.tablet} {
   
   grid-template-columns:30vw 1fr 10vw;
   height: 10vw;
  }

  ${media.phone} {
    height: 10vw;
    
  }
`
export const TripText = styled.div`
  display: flex;
  ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeXXXL, fontWeight: 'bold' })};
  margin: auto ;
  padding-right: 2vw;
  border-right: .0313rem solid #fff; 
  box-shadow: .0625rem 0 .0625rem -0.0625rem #000;
  ${media.tablet} {

  ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeS, fontWeight: 'bold' })};
}
  ${media.phone} {

  ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeS, fontWeight: 'bold' })};
}
  `
export const DescribeText = styled.div`
  
  font-size: 1.2vw;
  color: #fff;
  margin:0 2.6667vw 0 0;
  ${media.phone} {
    width: 80%;
    margin:0 1vw 0 0;
    
    overflow: hidden;
    /*将对象作为弹性伸缩盒子模型显示*/
    display: -webkit-box;
    /*设置子元素排列方式*/
    -webkit-box-orient: vertical;
    /*设置显示的行数，多出的部分会显示为...*/
    -webkit-line-clamp: 2;
  }
  `
export const MoreText = styled.div`
  display: flex;
  font-size: 1.5vw;
  margin: auto ;
  padding-right: 2vw;
  color: #fff;
  
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
