import styled from 'styled-components/macro';
import media from "@/styles/tools/media";
import { ReactComponent as Softwarelogo } from '@/assets/logo.svg';
import { BaseShadow, Border, Margin, Font, gridBox } from '@/styles/tools/logicalMixins'
import { BaseBoxShadow, BorderBase, BackgroundColor, FontColor, FontSizes } from '@/styles/settings/var';
/**
 * @date 2023/05/30
 * @description Header-css
 */

export const Container = styled.header`
  grid-area: header;
  z-index: 7;
  width: 100%;
  margin: auto ;
  align-items: center;
  background-color: ${BackgroundColor.backgroundColorFourth};
  ${Border({ bottom: BorderBase.borderPrimary })}
  ${BaseShadow(BaseBoxShadow.boxShadowBase)}

  ${media.tablet} {
   width: 100%;
   height:6vw;
  }
  ${media.phone} {
   width: 100%;
   height:10vw;
  }

`;

export const Navbar = styled.div`
  ${gridBox}
  height: 4.5vw;

  ${media.tablet} { 
    height: 6vw;
    ${gridBox({ gridTemplateColumns: '1fr 10vw' })}

  }
  ${media.phone} { 
    ${gridBox({ gridTemplateColumns: '1fr 20vw' })}
  height:10vw;
  }

`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
      cursor: pointer;
      color: hotpink; 
    } 
  ${media.tablet} { 
     text-align:left;
     ${Margin({ left: '5vw' })}
  }
  ${media.phone} { 
     text-align:left;
     ${Margin({ left: '5vw' })}
  }
`;

export const LogoBox = styled.div`
  display: flex;
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXL, fontWeight: 'bold', family: 'Helvetica Neue' })};
  ${media.tablet} {
     ${Margin({ right: 'auto' })}
     ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXL, fontWeight: 'bold', family: 'Helvetica Neue' })};
  }
  ${media.phone} {
     ${Margin({ right: 'auto' })}
     ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXL, fontWeight: 'bold', family: 'Helvetica Neue' })};
  }

`;
export const Logo = styled(Softwarelogo)`
  width: 3vw;
  height: 3vw;
  
  ${media.tablet} {
     width: 4vw;
     height: 4vw;
    
  }
  ${media.phone} {
     width: 5vw;
     height: 5vw;
    
  }

`;
export const MenuButton = styled.label`
  display: none;
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXL })};
  cursor: pointer;
  ${Margin({ all: 'auto' })}

  ${media.tablet} {
    display: block;
    ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXL })};
		cursor: pointer;
    

  }
 ${media.phone} {
    display: block;  
		${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXL })};
		cursor: pointer;
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

  ${media.tablet} {
    display: ${(props: VisibleProps) =>
    props.visible ? "block" : "none"};
    flex-flow:column;
    margin-top:1rem;
  }
  ${media.phone} {
    display: ${(props: VisibleProps) =>
    props.visible ? "block" : "none"};
    flex-flow:column;
    margin-top:1rem;
  } 
`;


export const HeaderRight = styled.div<VisibleProps>`
  display: flex; 
  justify-content: center;
  align-content: center;
  ${media.tablet} {
    position: absolute;
    left: 5vw;
    top: 42vw;
    display: ${(props: VisibleProps) =>
    props.visible ? "block" : "none"};
  }
  ${media.phone} {
    position: absolute;
    left: 6vw;
    top: 84vw;
    display: ${(props: VisibleProps) =>
    props.visible ? "block" : "none"};
  }
`;
export const Links = styled.ul`
  display: flex;
  justify-content:space-between;
  margin: 0;
  padding: 0;
  flex: 1 1 auto;
 
  ${media.tablet} {
    flex-direction: column;

		justify-content: center;
    align-items: flex-start;
    ${Margin({ left: '5vw' })}
  }
 ${media.phone} {
    flex-direction: column;
		justify-content: center;
   
     ${Margin({ left: '5vw' })}
  }

`;

export const Li = styled.li`
  display: flex;
 
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeS, fontWeight: 'bold' })};
  line-height: 3vw;//3倍字高
  
  text-align: center;//文本居中

  position: relative;
  
  margin:0;
/* 下划线出现动画  */
  line-height: 3vw;//3倍字高
  transition: 0.2s all linear;
    &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 40%;
            width: 0;
            height: 100%;
            ${Border({ bottom: BorderBase.borderFourth })}
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
  ${media.phone} {
    
		margin: 8px, 0;
   
  }
  
`;

export const SpanIcon = styled.span`
  display: block;
  margin: 0 auto; 
  margin-right: 10px;
  
  ${media.phone} {

	margin: 0 5px;

  }
  
`;
export const UserRegister = styled.div`
  display: flex;
  align-items: center;
  border-radius: .64vw;
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeS, fontWeight: 'bold' })}
  
 

`;
