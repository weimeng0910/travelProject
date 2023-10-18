import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import media from "@/styles/tools/media";
import { GoLang } from '@styled-icons/boxicons-logos/GoLang'
import { Hypnotize, GeoAltFill, PersonCircle, Speedometer, ShareFill } from '@styled-icons/Bootstrap'

import {
  BorderRadius,
  Font,
  GridBox,
  BaseShadow,
  Ellipsis,
  Padding,
  Margin,
  Center,
  FlexBox,
  Absolute,
  WH,
  Size,
  Transition,


} from '@/styles/tools/logicalMixins';
import {
  BorderRadiusBase,
  BackgroundColor,
  FontColor,
  FontSizes,
  BaseBoxShadow,
  ZIndex
} from '@/styles/settings/var'

/**
 * @date 2023/09/04
 * @description ProductCollection Css
 */

export const Container = styled.div`
  display: flex;
  ${WH({ width: '100%', height: '4vw' })}
  ${Margin({ all: '0' })};
  ${Padding({ all: '0' })}; 
  background-color:${BackgroundColor.backgroundColorFifrtary};
  ul{
    /* 相比display: inline，主要区别在于display: inline-block允许设置元素的宽度和高度。 */
    display: inline-block;
    ${Margin({ all: '0' })};
    ${Padding({ all: '0' })}; 
    };

  ul li{
    /* float属性用于定位和格式化内容，例如让图像向左浮动到容器中的文本 */
    float: right;
    ${Margin({ top: '0.2vw', bottom: '0', left: '0', right: '-3.1vw' })}
    ${Padding({ all: '0.31vw' })};
    ${BorderRadius({ all: '3.12vw' })}
    background-color:${BackgroundColor.backgroundColorFifrtary};
    ${Transition({ properties: 'all', time: '0.2s' })};
    cursor: pointer;
    
  };

  ul li:last-child span{
    /* display: block让span获得div的特性 */
    display: block;
    /* 隐藏溢出和清除浮动 */
    overflow: hidden;
    
    ${Size({ minWidth: '4.5vw' })}
    ${WH({ all: '4.5vw' })}
    background-color: #fff;
    text-align: center;
    line-height: 4.5vw;
    
    ${BorderRadius({ all: '3.12vw' })}
    ${Transition({ properties: 'all', time: '0.2s' })};
    box-sizing: border-box;  
  } ;  
  
  ul li:nth-child(-n+3) span{
    display: block;
    overflow: hidden;
    padding: 0 2.1vw 0 3.25vw;
    background-color:${BackgroundColor.backgroundColorFourth};
    text-align: center;
    line-height: 4.5vw;
    box-sizing: border-box;
    ${Transition({ properties: 'all', time: '0.2s' })}
    ${Size({ minWidth: '4.5vw' })};
    ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeK, fontWeight: 'bold' })};
    ${WH({ width: '16vw', height: '4.5vw' })};
    ${BorderRadius({ all: '3.12vw' })};
    
    &:hover {
    ${WH({ width: '20vw' })}
    ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeK, fontWeight: 'bold' })};
    background-color: #77c2a5;
    ${BaseShadow(BaseBoxShadow.boxShadowBase)}

    }

  }
`;
/**
 * Icon
*/
export const EmojiWinkFillIcon = styled(Hypnotize)`
   ${WH({ width: '2.5vw' })};
   ${Font({ color: FontColor.colorFontPrimary })};
   
  `;
export const GeoAltFillIcon = styled(GeoAltFill)`
   ${WH({ width: '1.5vw' })};
   ${Font({ color: FontColor.colorFontPrimary })};
   ${Margin({ right: '.5vw' })}
   &:hover {
   
    ${Font({ color: FontColor.colorFontWhite })};
    
    
}`;
export const PersonHeartsIcon = styled(PersonCircle)`
   ${WH({ width: '1.5vw' })};
   ${Font({ color: FontColor.colorFontPrimary })};
   ${Margin({ right: '.5vw' })}
   &:hover {
   
    ${Font({ color: FontColor.colorFontWhite })};
    
    
} `;
export const SpeedometerIcon = styled(Speedometer)`
   ${WH({ width: '1.5vw' })};
   ${Font({ color: FontColor.colorFontPrimary })};
   ${Margin({ right: '.5vw' })}
   &:hover {
   
    ${Font({ color: FontColor.colorFontWhite })};
    
    
} `;
export const GoLangIcon = styled(GoLang)`
   ${WH({ width: '5vw', height: '5vw' })};
   ${Font({ color: FontColor.colorFontPrimary })};
   ${Margin({ right: '.5vw' })}
   &:hover {
   
    ${Font({ color: FontColor.colorFontWhite })};
    
    
} `;
/**
 * DatePicker 
*/
export const DatePickerStyle = styled(DatePicker)`
    display: block;
    overflow: hidden;
    padding: 0 2.1vw 0 3.25vw;
    background-color:${BackgroundColor.backgroundColorFourth};
    text-align: center;
    line-height: 4.5vw;
    box-sizing: border-box;
    /*z-index:-1;*/
    ${Transition({ properties: 'all', time: '0.2s' })}
    ${Size({ minWidth: '5vw' })};
    ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeK, fontWeight: 'bold' })};
    ${WH({ width: '18vw', height: '4.5vw' })};
    ${BorderRadius({ all: '3.12vw' })};
    
    &:hover {
    ${WH({ width: '21vw' })}
    ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeK, fontWeight: 'bold' })};
    background-color: #77c2a5;
    ${BaseShadow(BaseBoxShadow.boxShadowBase)}

    }
    
  `;
