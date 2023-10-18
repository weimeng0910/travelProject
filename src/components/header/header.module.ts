import styled from 'styled-components/macro';
import media from "@/styles/tools/media";
import { ReactComponent as Softwarelogo } from '@/assets/logo.svg';
import {
  BorderRadius,
  Font,
  GridBox,
  BaseShadow,
  Padding,
  Margin,
  FlexBox,
  Absolute,
  WH,
  Transition,
  Border

} from '@/styles/tools/logicalMixins';
import {
  BackgroundColor,
  FontColor,
  FontSizes,
  BaseBoxShadow,
  ZIndex,
  BorderBase,
  a11yHidden,
  inlineBlock
} from '@/styles/settings/var';
/**
 * @date 2023/05/30
 * @description Header-css
 */

export const Container = styled.header`
  grid-area: header;
  ${ZIndex.indexTop};
  ${Margin({ all: 'auto' })}
  ${WH({ width: '100%', height: '4.5vw' })}
  ${BackgroundColor.backgroundColorFourth};
  ${Border({ bottom: BorderBase.borderPrimary })}
  ${BaseShadow(BaseBoxShadow.boxShadowBase)}
  ${media.tablet} {
    ${WH({ width: '100%', height: '6vw' })}
  }
  ${media.phone} {
     ${WH({ width: '100%', height: '10vw' })}
  }
`;

export const Navbar = styled.div`
  ${GridBox({ gridTemplateColumns: '12vw 1fr 12vw' })};
  ${WH({ width: '76.625vw', height: '4.5vw' })};
  ${Margin({ x: 'auto', y: '0' })}
  ${media.desktop} { 
    ${WH({ width: '98vw', height: '4.5vw' })}
   
  }
  ${media.tablet} { 

    ${WH({ width: '100vw', height: '6vw' })}
    ${GridBox({ gridTemplateColumns: '1fr 10vw' })}

  }
  ${media.phone} { 
    ${GridBox({ gridTemplateColumns: '1fr 20vw' })}
    ${WH({ width: '100vw', height: '10vw' })}
  }

`;

export const HeaderLeft = styled.div`
  ${FlexBox}
  &:hover {
      cursor: pointer;
      color: hotpink; 
    } 
  ${media.tablet} { 
     text-align:left;
     ${Margin({ left: '5vw' })}
  }
  ${media.phone} { 
     /*text-align:left;*/
     ${Margin({ left: '5vw' })}
  }
`;

export const LogoBox = styled.div`
  display: flex;
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXXL, fontWeight: 'bold', family: 'Helvetica Neue' })};
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
  ${WH({ all: '3vw' })};
  ${media.tablet} {
    ${WH({ all: '4vw' })};
    
  }
  ${media.phone} {
     ${WH({ all: '5vw' })}; 
  }

`;
export const MenuButton = styled.label`
  ${a11yHidden}
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeL, })};
  cursor: pointer;
  ${Margin({ all: 'auto' })}

  ${media.tablet} {
   
    ${inlineBlock}
    ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXL })};
		cursor: pointer;
    

  }
 ${media.phone} {
    ${inlineBlock}  
		${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXL })};
		cursor: pointer;
  }
`;

type VisibleProps = {
  visible: boolean;
}

export const HeaderCenter = styled.div<VisibleProps>`
  flex: 1;
  ${FlexBox({ spacing: 'space-between' })}
  ${media.tablet} {
    display: ${(props: VisibleProps) =>
    props.visible ? "block" : "none"};
    flex-flow:column;
  

  }
  ${media.phone} {
    display: ${(props: VisibleProps) =>
    props.visible ? "block" : "none"};
    flex-flow:column;
   
  } 
  ul{
    ${FlexBox({ spacing: 'space-between' })}
    ${Margin({ all: '0' })}
    ${Padding({ all: '0' })}
    flex: 1 1 auto;

    ${media.tablet} {

      ${FlexBox({ direction: 'column', alignment: 'flex-start' })}
      ${Margin({ left: '5vw', top: '4vw' })}
    }
    ${media.phone} {

    ${FlexBox({ direction: 'column', alignment: 'flex-start' })}
    ${Margin({ left: '5vw', top: '8vw' })}
    ${Transition({ properties: '0.6s all linear' })}
    }
    li{
      display: flex;
      position: relative;
      ${Margin({ y: '0', x: '1vw' })}
      ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeL, fontWeight: 'bold' })};
       /* 下划线出现动画  */
      line-height: 2vw;
      ${Transition({ properties: '0.2s all linear' })}
      &::before {
            content: "";
            ${Absolute({ top: '0', left: '40%' })}
            ${WH({ width: '0', height: '100%' })}
            ${Border({ bottom: BorderBase.borderFourth })}
            ${Transition({ properties: '0.2s all linear' })}
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
            
            ${Margin({ y: '0.5vw', x: '0' })};
         }
        ${media.phone} {
		       ${Margin({ y: '0.5vw', x: '0' })} ;
           line-height: 5vw;
        }
        span{
            ${Margin({ right: '0.7vw' })}
            ${media.phone} {
 
	           margin: 0 .4vw;
             ${Margin({ x: '0.4vw', y: '0.4vw' })}
            }
  
         }
      }
  }
`;


export const HeaderRight = styled.div<VisibleProps>`
  ${FlexBox({ spacing: 'center' })}
  ${media.tablet} {
    ${Absolute({ top: '26vw', left: '5vw' })}
    display: ${(props: VisibleProps) =>
    props.visible ? "block" : "none"};
  }
  ${media.phone} {
    ${Absolute({ top: '54vw', left: '5vw' })}
    display: ${(props: VisibleProps) =>
    props.visible ? "block" : "none"};
    
  }
`;



export const UserRegister = styled.div`
  ${FlexBox({ alignment: 'center' })};
  ${BorderRadius({ all: '.64vw' })};
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeL, fontWeight: 'bold' })};
  
 

`;
