/*
 * @Date: 2023/05/30 19:47:42
 * @Description: authenticatedApp-css
 */
import styled from 'styled-components/macro';
import media from "@/styles/tools/media";
import { px2vw } from '@/common/hooks';
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
  flex: 1;
  ${WH({ width: '100%', height: 'auto' })};
  margin-top:clamp(5px,1vw,20px);
  ${Margin({ left: 'auto', right: 'auto' })};
  clear: both;
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
  border-top: solid .3125rem #16a085;
  background-color:#FAFAFA;
  
  
  
`;
