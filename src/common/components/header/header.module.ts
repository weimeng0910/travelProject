/*
 * @Date: 2023-05-30 19:31:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-12-08 12:43:29
 * @FilePath: /travelProject/src/components/header/header.module.ts
 * @Description: Header-css
 */
import styled from 'styled-components/macro';
import media from "@/styles/tools/media";
import { ReactComponent as Softwarelogo } from '@/assets/logo.svg';
import { px2vw } from '@/utils';
import {
  BorderRadius,
  Font,
  GridBox,

  Margin,
  FlexBox,
  Absolute,
  WH,
  Transition,
  Border

} from '@/styles/tools/logicalMixins';
import {

  FontColor,
  FontSizes,
  BorderBase,
  a11yHidden,
  inlineBlock
} from '@/styles/settings/var';
/**
 *  Header-css
 */

export const Container = styled.div`
   display: flex;
   ${Margin({ y: '0' })};
   ${WH({ width: '100%' })};
   height: 60px;
   max-width:1220px;
   ${media.bigdesktop} {
       width:${px2vw(1220, 1280)} ;
       height:${px2vw(60, 1280)}  ;
   }
   ${media.desktop} {
       width:${px2vw(1000, 1024)} ;
       height:${px2vw(60, 1024)}  ;
    
   }
   ${media.tablet} {
       width:${px2vw(760, 768)} ;
       height:${px2vw(60, 768)}  ;
    
   }

   ${media.phone} {
       width:${px2vw(570, 576)} ;
       height:${px2vw(60, 576)}  ;
    
   }
`;

export const Navbar = styled.div`
  
  ${GridBox({ gridTemplateColumns: '120px 1fr 120px' })};
  ${WH({ width: '100%' })};
  ${media.tablet} { 
    width:${px2vw(768, 768)};
    
  }
  ${media.phone} { 
    width:${px2vw(576, 576)} ;
    
    
  }
`;

export const HeaderLeft = styled.div`
  ${FlexBox};
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXXL, fontWeight: 'bold', family: 'Helvetica Neue' })};
  position: relative;
  &:hover {
      cursor: pointer;
      color: hotpink; 
    } 
  div{
     ${FlexBox}; 
  }
  ${media.tablet} { 
     ${Margin({ left: '1vw' })};
     ${FlexBox({ spacing: 'flex-start' })};
     div{
         position: absolute;
         top:${px2vw(30)};
         left: ${px2vw(14)};
     }
  }
  ${media.phone} { 
    ${Margin({ left: '1vw' })};
    ${FlexBox({ spacing: 'flex-start' })};
    div{
         position: absolute;
         top:${px2vw(29)};
         left: ${px2vw(14)};
     }
  }
`;

export const Logo = styled(Softwarelogo)`
  max-width: 30px;
  max-height:30px;
  ${media.tablet} {
   ${WH({ all: '4vw' })}; 
 
  }
  ${media.phone} {
     ${WH({ all: '5vw' })}; 
  }
`;

export const MenuButton = styled.div`
  ${a11yHidden};
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeL, })};
  ${Margin({ right: '1vw' })};
  cursor: pointer;
  position: relative;
  ${media.tablet} {
    ${inlineBlock};
    ${FlexBox({ spacing: 'center' })};
    ${Margin({ all: '0' })};
    ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXL })};
		cursor: pointer;
    position: absolute;
    top:${px2vw(20, 768)};
    right: ${px2vw(30, 768)};
  }
 ${media.phone} {
    ${inlineBlock} ; 
    ${FlexBox({ spacing: 'center' })};
		${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXL })};
		cursor: pointer;
    position: absolute;
    top:${px2vw(20, 576)};
    right: ${px2vw(30, 576)};
  }
`;

type VisibleProps = {
  visible: boolean;
}

export const HeaderCenter = styled.div<VisibleProps>`
  ${WH({ width: '100%' })};
  ${FlexBox({ spacing: 'center' })};
  position: relative;
  ul{
      ${FlexBox({ spacing: 'center' })};
      flex-wrap: wrap;
      margin: 0;
      ${media.tablet} {
         ${FlexBox({ spacing: 'space-between' })};
         display: ${(props: VisibleProps) => props.visible ? "block" : "none"};
         flex-flow:column;
         position: absolute;
         top:${px2vw(70, 768)};
         left: ${px2vw(-110, 768)};
      }
      ${media.phone} {
          display: ${(props: VisibleProps) => props.visible ? "block" : "none"};
          flex-flow:column;
          position: absolute;
          top:${px2vw(70, 576)};
          left: ${px2vw(-150, 576)};
      } 
    }
      li{
           position: relative;
           ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXXL, fontWeight: 'bold' })};
           ${Transition({ properties: '0.2s all linear' })};
           ${media.tablet} {
               ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeL, fontWeight: 'bold' })};
           }
           ${media.phone} {
               ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeL, fontWeight: 'bold' })};
           } 
           &::before {
              content: "";
               ${Absolute({ top: '0', left: '40%' })};
               ${WH({ width: '0', height: '100%' })};
               ${Border({ bottom: BorderBase.borderFourth })};
               ${Transition({ properties: '0.2s all linear' })};
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
           span{
               ${Margin({ x: '0.3vw' })}
            }
       }
`;


export const HeaderRight = styled.div<VisibleProps>`
  ${FlexBox({ spacing: 'center' })};
  ${media.tablet} {
      position: absolute;
      top:${px2vw(200, 768)};
      left: ${px2vw(20, 768)};
      display: ${(props: VisibleProps) => props.visible ? "block" : "none"};
  }
  ${media.phone} {
      position: absolute;
      top:${px2vw(300, 576)};
      left: ${px2vw(70, 576)};
       display: ${(props: VisibleProps) => props.visible ? "block" : "none"};
  }
`;

export const UserRegister = styled.div`
  ${FlexBox({ alignment: 'center' })};
  ${BorderRadius({ all: '.64vw' })};
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXL, fontWeight: 'bold' })};
`;
