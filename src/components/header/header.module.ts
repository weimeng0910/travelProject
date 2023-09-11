import styled from 'styled-components/macro';
import media from "@/styles/media";
import { BaseShadow, Border, Margin, Font } from '@/styles/tools/logicalMixins'
import { BaseBoxShadow, BorderBase, BackgroundColor, FontColor, FontSizes } from '@/styles/settings/var';//Benchmark variable
/**
 * @date 2023/05/30
 * @description Header-css
 */

export const Container = styled.header`
  grid-area: header;
  position: fixed;//元素的位置相对于浏览器窗口是固定位置
  z-index: 7;
  width: 100%;
  background-color: ${BackgroundColor.backgroundColorFourth};
  ${Border({ bottom: BorderBase.borderprimary })}
  ${BaseShadow(BaseBoxShadow.boxShadowbase)}
`;

export const Navbar = styled.div`
  display: flex;
  height: 3.75rem;
  justify-content: center;
  align-items: center;
 
   ${media.phone} {
    height: 5rem;
    flex-flow: row wrap;
    align-items: center;
  }
  
`;

export const HeaderLeft = styled.div`
  display: flex;
  width: 18.75rem;
  height: 100%;
  justify-content: center;
  align-items: center;
  
  font-weight: bold;
  /*margin-left: 1.25rem;*/
  ${Margin({ left: '20px' })}
  &:hover {
      cursor: pointer;
      color: hotpink; // <Thing> when hovered
    } 
  ${media.tablet} {
     flex:1;
     text-align:left;
     ${Margin({ right: 'auto' })}
     width: 50%;

  }
`;

export const LogoFont = styled.h1`
  display: flex;
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXXL })};
  /*font-weight: bold;*/
  /*margin: 0;*/
  ${Margin({ all: '0' })}
 ${media.phone} {
    
     text-align:left;
     margin-right: auto;
   
  }

  
`;
export const MenuButton = styled.label`
  display: none;
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeS })};
  cursor: pointer;
  margin: auto;

 ${media.tablet} {
    display: block;  
		color: #16a085;
		cursor: pointer;
    margin-right: 20px;
		
  }
  
`;
type VisibleProps = {
  visible: boolean;
}
export const HeaderCenter = styled.div<VisibleProps>`
 	display: flex;
  flex: 1;
  justify-content:space-between;
  align-items: center;
  box-sizing: border-box;
  
  
  
  ${media.tablet} {
    
    display: ${(props: VisibleProps) =>
    props.visible ? "block" : "none"};
    flex-flow:column;
    margin-top:1rem;
  }
  
`;


export const HeaderRight = styled.div<VisibleProps>`
  display: flex; 
  width: 18.75rem;
  justify-content: center;
  align-content: center;
  padding-right: 10px;

  ${media.tablet} {
    position: absolute;
    left: 35px;
    top: 23rem;
    display: ${(props: VisibleProps) =>
    props.visible ? "block" : "none"};
  }
  


`;
export const Links = styled.ul`
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin: 0;
  padding: 20px auto;
  flex: 1 1 auto;
 
  
 ${media.tablet} {
    flex-direction: column;

		justify-content: center;
    /*margin-right: 30px;*/
  }

`;

export const Li = styled.li`
  display: flex;
 
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeL })};
  font-weight: bold;
  text-align: center;//文本居中

  position: relative;
  padding: 0 10px;
  margin:0;

  /*line-height: 3rem;//3倍字高*/
  transition: 0.2s all linear;

  
    &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 40%;
            width: 0;
            height: 100%;
            border-bottom: 2px solid #118060;
            transition: 0.2s all linear;
        }

        &:hover{
           color: #95a5a6;
         ::before {

            width: 100%;
            top: 0;
            left: 0;
            transition-delay: 0.1s;
            border-bottom-color: #2ecc71;
        }
  }
  ${media.tablet} {
    
		margin: 8px, 0;
   
  }
  
`;

export const SpanIcon = styled.span`
  display: block;
  margin: 0 auto; //居中对齐
  margin-right: 10px;
  
  ${media.phone} {

	margin: 0 5px;

  }
  
`;
export const UserRegister = styled.div`
  font-size: 18px;
  border-radius: .3rem;//圆角
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeL })}
  font-weight: bold;
  padding: .3rem 1rem;

`;
