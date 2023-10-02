import styled from 'styled-components';
import { Button } from 'antd'
import { HeartTwoTone } from '@ant-design/icons';
import { BorderRadius, Font, gridBox, BaseShadow, Ellipsis } from '@/styles/tools/logicalMixins';
import { BorderRadiusBase, BackgroundColor, FontColor, FontSizes, BaseBoxShadow } from '@/styles/settings/var'
import media from "@/styles/tools/media";
/**
 * @date 2023/09/04
 * @description ProductCollection Css
 */

export const Container = styled.div`
  display: flex;
  flex-flow:column nowrap;
 
  ${media.tablet} {
    width:90vw; 
  }

  ${media.phone} {
    width:90vw;
    
  }

`;
/**
 * text
*/
export const TitleBox = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 5vw;
  align-items: center;
  ${BorderRadius({ all: BorderRadiusBase.borderRadiusSmall })};
  background-color:${BackgroundColor.backgroundColorprimary};
  width: 100%;
  height: 8vw;
  ${media.desktop} {
   grid-template-columns:30vw 1fr 10vw;
   height: 8vw;
  }

  ${media.tablet} {
   grid-template-columns:30vw 1fr 10vw;
   height: 10vw;
  }

  ${media.phone} {
    height: 10vw;
    
  }
`;

export const TripText = styled.div`
  display: flex;
  ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeXL, fontWeight: 'bold' })};
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
  `;

export const DescribeText = styled.div`
  
  font-size: 1.2vw;
  color: #fff;
  margin:0 2.6667vw 0 0;
  ${media.desktop} {
    width: 80%;
    margin:0 1vw 0 0;
    ${Ellipsis({ webkitLinCclamp: '2' })}
  }
  ${media.tablet} {
    width: 80%;
    margin:0 1vw 0 0;
    ${Ellipsis({ webkitLinCclamp: '2' })}
  }
  ${media.phone} {
    width: 80%;
    margin:0 1vw 0 0;
    ${Ellipsis({ webkitLinCclamp: '2' })}
  }
  `;

export const MoreText = styled.div`
  display: flex;
  font-size: 1.5vw;
  margin: auto ;
  padding-right: 2vw;
  color: #fff;
  
  `;
/**
 * goods
*/
export const HotGoodsBox = styled.div`
  ${gridBox({ gridColumnGap: '1vw' })}
  align-items: center;
  width: 100%;
  `;

export const ProductBox = styled.div`
  display: grid;
  position: relative;
  grid-template-rows:2fr 1fr;
  margin-top: 2vw;
  width: 100%;
  border-radius: 1.6vw;
  cursor: pointer;
  height: 19vw;
  transition:all .3s;

  &:hover {
    transform: translate(0,-0.625rem);;
    ${BaseShadow(BaseBoxShadow.boxShadowBase)}
    ul li:nth-child(2){
      display: none;
    } 
    ul li:last-child{
    display: block;  
    }
    }

  ${media.tablet} {
    margin-top: 3vw;
  }

  ${media.phone} {
    margin-top: 4vw;
  }
`;

export const HotGoodsImg = styled.div` 
  border-radius: 1.6vw 1.6vw 0 0;
  background-color: #fff;
  `;

export const Img = styled.img`
  display: flex;
  border-radius: 1.6vw 1.6vw 0 0;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
 
  width: 100%;
  height:16vw;
  ${media.tablet} {
  height:18vw;

  }
  ${media.phone} {
    
    height: 20vw;
    
  }
`;

export const Hot = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.25vw;
  right: 1.25vw;
  width: 2.5vw;
  height:2.5vw;
  z-index: 1;
  border-radius: 50%;   
  background-color:#16A085;
  border: 0 solid palevioletred;
  opacity:0.6;

  ${media.tablet} {
    width: 3vw;
    height: 3vw;

  }
  ${media.phone} {
    width: 3vw;
    height: 3vw;
    
  }
  `;

export const Heart = styled(HeartTwoTone)`
  font-size: 1.8vw;

  `;
export const Buttondisplay = styled(Button)`
  
  margin: .5vw; 
 ${Font({ color: FontColor.colorFontGrey, size: FontSizes.sizeJ, fontWeight: 'bold' })};
 
  `;
export const HotGoodsWord = styled.div`

  text-align: center;
  
  border-radius: 0 0 1.6vw 1.6vw; 
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeK })};
  background-color: #fff;
  ul {
    margin: 0;
    padding: 0;  
    height: 6vw;
    ${media.tablet} {
   
    height: 8vw;

  }
  ${media.phone} {
   
    height: 15vw;
    
  }
  }
  ul li:first-child{
    width: 90%;
    
    ${Ellipsis({ webkitLinCclamp: '1' })}
  };
  ul li:nth-child(2){
    display: block;
    width: 90%;
    ${Font({ color: FontColor.colorFontGrey, size: FontSizes.sizeJ, fontWeight: 'bold' })};
    ${Ellipsis({ webkitLinCclamp: '1' })}
  };
  ul li:last-child{
    display: none;
    width: 100%;
     
  };
  ul li button:first-child{
    ${media.tablet} {
   
      display: none;
    
     }
    ${media.phone} {
   
     display: none;
    
    }
     
  };
  
  `;
