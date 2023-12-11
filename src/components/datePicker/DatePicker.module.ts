/*
 * @Date: 2023-10-10 11:00:09
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-01 18:12:47
 * @FilePath: /travelProject/src/components/datePicker/DatePicker.module.ts
 * @Description: Antd pickerStyle
 */
import styled from "styled-components";
import { px2vw } from '@/common/hooks';
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
} from '@/styles/settings/var';

import media from "@/styles/tools/media";

export const Container = styled.span`
    display: block;
    line-height: 4.5vw;
    box-sizing: border-box;
    background:#fff;
    ${Transition({ properties: 'all', time: '0.2s' })}
    ${Size({ minWidth: '4.5vw' })};
    ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXL, fontWeight: 'bold' })};
    width: 240px;
    height: 50px;
    max-width: 260px;
    max-height:70px
    ${BorderRadius({ all: '3.12vw' })};
    ${media.tablet} {
      width: 23vw;
     }
    ${media.phone} {
       width: 25vw;
     } 
    &:hover {
    ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeK, fontWeight: 'bold' })};
    ${BaseShadow(BaseBoxShadow.boxShadowBase)}
    background-color: #77c2a5;
    
    };
     .ant-picker {
      text-align: center;
      border: none !important;
      line-height: 4.5vw;
      margin: 0;
      padding: 0;
      width: 16vw !important;
      height: 4.5vw;
      text-align: center !important;
      background: none!important;
      padding: 0 2.1vw 0 3.25vw;
      ${BorderRadius({ all: '3.12vw' })}
      ${Transition({ properties: 'all', time: '0.2s' })}
      margin-left:1.6vw !important;
      
      &:hover {
        
        .ant-picker-suffix {
          color: #fff;
        }
        .ant-picker-input > input{
          &::placeholder {
           color: #fff !important;
        
          }
        }
       }
     };
     .ant-picker-focused {
        background: none !important;
        border-color: red !important;
        box-shadow: none !important;
    };

    .ant-picker-input{
       position:relative;
       background: none !important;
       margin: 0;
       padding: 0;
       width: 16vw !important;
       height: 4.5vw !important;


   };
   .ant-picker-input > input:placeholder-shown {
    text-overflow:clip !important;
}
   .ant-picker-input > input{
       margin: 0;
       padding: 0;
       line-height: 4.5vw !important;
       /*text-align: center !important;*/
       border: none !important;
       background: none!important;
       width: 230px!important;
       height:65px !important;
      
   
       &::placeholder {
           margin-right:2vw;
           ${Font({ color: FontColor.colorFontPrimary, size: '1em', fontWeight: 'bold' })};
           ${media.phone} {
       
             font-size:.6em;
           }
       }
  };

   .ant-picker-suffix {
      position: absolute;
      right: 7vw;
      background: transparent !important;  
      ${Font({ color: FontColor.colorFontPrimary })}; 
      ${media.tablet} {
         display: none;
       }
       ${media.phone} {
       
          display: none;
        }
     
  }
  .ant-picker-cell-inner  {
    font-size: .3em !important;
  }

`;