/*
 * @Date: 2023/05/30 19:47:42
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-27 12:13:19
 * @FilePath: /travelProject/src/styles/authenticatedApp.module.ts
 * @Description: authenticatedApp-css
 */
import styled from 'styled-components/macro';
import media from "@/styles/tools/media";
import { px2vw } from '@/utils';
import {
  BaseShadow,
  Margin,
  FlexBox,
  WH,
  Border,
} from '@/styles/tools/logicalMixins';
import {
  BackgroundColor,
  BaseBoxShadow,
  BorderBase,
} from '@/styles/settings/var';

/**
 * authenticatedApp-css
*/
type VisibleProps = {
  visible: boolean;
}

/** layout*/
export const Layout = styled.div`
  ${FlexBox({ direction: 'column', alignContent: 'center' })};
  ${WH({ width: '100vw' })};
  max-width: 100%;
  
 

`;
/** header*/
export const HeaderBox = styled.header`
  ${FlexBox({ alignContent: 'center' })};
  ${WH({ width: '100%', height: '100%' })};
  background-color:${BackgroundColor.backgroundColorFourth};
  ${Border({ bottom: BorderBase.borderPrimary })};
  ${BaseShadow(BaseBoxShadow.boxShadowBase)};
  max-height: 60px; 
  position:sticky;
  top:0;
  z-index:1000;
  ${media.bigdesktop} {
    height:${px2vw(60, 1280)}  ;
  }
  ${media.desktop} {
    height:${px2vw(60, 1024)}  ;
  }
  ${media.tablet} {
    height:${px2vw(60, 768)}  ; 
  }

  ${media.phone} {
    height:${px2vw(60, 576)}  ;
  }
`;
/** main*/
const tabletNavBottom = `${px2vw(180, 768)}`;
const phoneNavBottom = `${px2vw(230, 576)}`;
export const Main = styled.main<VisibleProps>`
  ${FlexBox({ alignContent: 'center' })};
  ${Margin({ left: 'auto', right: 'auto' })};
  ${WH({ width: '100%' })};
  margin-top:${px2vw(20)}  ;
  
  ${BackgroundColor.backgroundColorFourth}
  flex: 1;
  /* ipad */
  ${media.tablet} {
    margin-top:${(props: VisibleProps) => props.visible ? tabletNavBottom : "2vw"};
  }
  /* iphone6 7 8 plus */
  ${media.phone} {
    margin-top:${(props: VisibleProps) => props.visible ? phoneNavBottom : "2vw"}; 
  }
`;

/** footer*/
export const Footer = styled.footer`
  
  z-index: -2;
  ${WH({ width: '100%' })};
  max-height: 60px; 
  ${Margin({ all: 'auto' })}
  border-bottom: solid .3125rem #16a085;
  ${BackgroundColor.backgroundColorFourth};
  ${media.bigdesktop} {
    height:${px2vw(60, 1280)}  ;
  }
  ${media.desktop} {
    height:${px2vw(60, 1024)}  ;
  }
  ${media.tablet} {
    height:${px2vw(60, 768)}  ; 
  }

  ${media.phone} {
    height:${px2vw(60, 576)}  ;
  }
  
`;
