/*
 * @Date: 2023/05/30 19:47:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-12-08 12:43:10
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
  height: 100%;
  
  
 

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
const phoneNavBottom = `${px2vw(300, 576)}`;
export const Main = styled.main<VisibleProps>`
  ${FlexBox({ alignContent: 'center' })};
  flex-grow:1;
  ${Margin({ left: 'auto', right: 'auto' })};
  ${WH({ width: '100%', height: '100%' })};
  margin-top:${px2vw(20)}  ;
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
  ${Margin({ top: '20px' })}
  border-bottom: solid .3125rem #16a085;
  background-color:#FAFAFA;
  
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
