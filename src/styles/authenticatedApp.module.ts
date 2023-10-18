/*
 * @Date: 2023/05/30 19:47:42
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-18 10:28:13
 * @FilePath: /travelProject/src/styles/authenticatedApp.module.ts
 * @Description: authenticatedApp-css
 */
import styled from 'styled-components/macro';
import media from "@/styles/tools/media";
import { Margin, FlexBox } from '@/styles/tools/logicalMixins';
import { BackgroundColor } from '@/styles/settings/var';


export const Layout = styled.div`
  display: grid;
  grid-template-rows: 4vw 1fr 4vw;
  grid-row-gap: 1.5vw;
  grid-template-areas:
    'header   header'
    'main  main'
    'foorer   foorer'; 

`;

type VisibleProps = {
  visible: boolean;
}

export const Main = styled.main<VisibleProps>`
  grid-area: main;
  ${FlexBox({ direction: 'column', alignContent: 'flex-start' })};
  ${BackgroundColor.backgroundColorFourth}
  ${Margin({ top: '1vw' })}
  /* ipad */
  ${media.tablet} {
   
    margin-top:${(props: VisibleProps) =>
    props.visible ? "26vw" : "2vw"};
    
  }
  /* iphone6 7 8 plus */
  ${media.phone} {
   
    margin-top:${(props: VisibleProps) =>
    props.visible ? "55vw" : "5.5vw"};
    
  }

`;


export const Footer = styled.footer`
  grid-area: foorer;
  z-index: -2;
  border-bottom: solid .3125rem #16a085;
  ${BackgroundColor.backgroundColorFourth};
  
`;
