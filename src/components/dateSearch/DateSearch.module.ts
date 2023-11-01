/*
 * @Date: 2023-09-04 08:59:49
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-01 18:12:14
 * @FilePath: /travelProject/src/components/dateSearch/DateSearch.module.ts
 * @Description: ProductCollection Css
 */
import styled from 'styled-components';
import "react-datepicker/dist/react-datepicker.css";
import media from "@/styles/tools/media";
import { GoLang } from '@styled-icons/boxicons-logos/GoLang'
import { Hypnotize, GeoAltFill, PersonCircle, Speedometer, ShareFill } from '@styled-icons/Bootstrap'
import { px2vw } from '@/utils';
import {
  BorderRadius,
  Font,
  BaseShadow,
  Padding,
  Margin,
  Center,
  bgMixin,
  WH,
  Transition,
} from '@/styles/tools/logicalMixins';
import {

  BackgroundColor,
  FontColor,
  FontSizes,
  BaseBoxShadow,
} from '@/styles/settings/var'

/**
 * ProductCollection Css
 */

export const Container = styled.div`
  display: flex;
  ${WH({ width: '100%', height: '4vw' })}
  ${Margin({ all: '0' })};
  ${Padding({ all: '0' })}; 
  ${bgMixin({ color: BackgroundColor.backgroundColorFifrtary })}
  #menuBox {
    display: inline-block;
    ${Margin({ all: '0' })};
    ${Padding({ all: '0' })}; 
    };

  div[title="float"]{
    float: right;
    ${Margin({ top: '0.2vw', bottom: '0', left: '0', right: '-3.1vw' })}
    ${Padding({ all: '0.31vw' })};
    ${BorderRadius({ all: '3.12vw' })}
    ${bgMixin({ color: BackgroundColor.backgroundColorFifrtary })}
    ${Transition({ properties: 'all', time: '0.2s' })};
    cursor: pointer;
    
  };


   #Icon{

     a{
       position:relative;
       display: block;

       ${WH({ all: '4.5vw' })}
       ${bgMixin({ color: BackgroundColor.backgroundColorFourth })}
       line-height: 4.5vw;
       ${BorderRadius({ all: '50%' })}
       ${Transition({ properties: 'all', time: '0.2s' })};
       box-sizing: border-box; 
       justify-content: center;
       align-items: center;
       text-align: center;
 
  } ;   
 } 
  div:not(last-child) a {
    display: block;
    padding: 0 2.1vw 0 3.25vw;
    text-align: center;
    line-height: 4.5vw;
    box-sizing: border-box;
    ${bgMixin({ color: BackgroundColor.backgroundColorFourth })};
    ${Transition({ properties: 'all', time: '0.2s' })};
    ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeK, fontWeight: 'bold' })};
    ${WH({ width: '240px', height: '50px' })};
    ${BorderRadius({ all: '3.12vw' })};
    max-width: 260px;
    max-height:70px;
    &:hover {
    
    ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeK, fontWeight: 'bold' })};
    ${bgMixin({ color: '#77c2a5' })};
    ${BaseShadow(BaseBoxShadow.boxShadowBase)}

    }
    ${media.tablet} {
      ${WH({ width: '18vw', height: '4.5vw' })};
    }
    ${media.phone} {
      ${WH({ width: '25vw', height: '5vw' })};
    } 
  }
`;
/**
 * Icon
*/
export const EmojiWinkFillIcon = styled(Hypnotize)`
   ${Center}
   ${WH({ width: '2.5vw' })};
   ${Font({ color: FontColor.colorFontPrimary })};
   
  `;
export const GeoAltFillIcon = styled(GeoAltFill)`
   ${WH({ width: '1.5vw' })};
   ${Font({ color: FontColor.colorFontPrimary })};
   ${Margin({ right: '.5vw' })}
   &:hover {
    ${Font({ color: FontColor.colorFontWhite })};
    }
    `;
export const PersonHeartsIcon = styled(PersonCircle)`
   ${WH({ width: '1.5vw' })};
   ${Font({ color: FontColor.colorFontPrimary })};
   ${Margin({ right: '.5vw' })}
   &:hover {
    ${Font({ color: FontColor.colorFontWhite })};
    }
   `;
export const SpeedometerIcon = styled(Speedometer)`
   ${WH({ width: '1.5vw' })};
   ${Margin({ right: '.5vw' })}
   `;
export const GoLangIcon = styled(GoLang)`
   ${WH({ width: '5vw', height: '5vw' })};
   ${Font({ color: FontColor.colorFontPrimary })};
   ${Margin({ right: '.5vw' })}
   &:hover {
   
    ${Font({ color: FontColor.colorFontWhite })};   
   }
  `;

