/*
 * @Date:  2023/05/30 12:18:22
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-30 16:49:35
 * @FilePath: /travelProject/src/components/serchPanel/SearchPanel.module.ts
 * @Description: Homepage-css
 */
import styled from 'styled-components';
import media from "@/styles/tools/media";
import { px2vw } from '@/utils';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

import { Font, Buttons, WH, Margin, FlexBox, GridBox, BorderRadius } from '@/styles/tools/logicalMixins';
import { FontColor, FontSizes, BorderRadiusBase, SizeBase } from '@/styles/settings/var';
import TravlIcon from '@/assets/icon/travel01.png'


export const Container = styled.div`
  ${FlexBox({ direction: 'column' })};
  ${WH({ width: '100%' })};  
  ${Margin({ bottom: SizeBase })};
  ${media.tablet} {
      ${WH({ width: '100%' })}
  }
  ${media.phone} {
      ${WH({ width: '94%' })}
  }
`;
export const WelcomeText = styled.div`
  ${GridBox({ gridTemplateColumns: '2fr 1fr' })};
  ${Font({ color: FontColor.colorFontGrey, size: '3.5em', fontWeight: 'bold' })};
  ${WH({ width: '96%' })};
  ${media.tablet} {
      ${Font({ color: FontColor.colorFontGrey, size: FontSizes.sizeXXXL, fontWeight: 'bold' })};
  }
  ${media.phone} {
      ${Font({ color: FontColor.colorFontGrey, size: FontSizes.sizeXXL, fontWeight: 'bold' })};
    }
  & div :last-child{
    ${Margin({ left: 'auto', right: SizeBase })};
    ${BorderRadius({ all: BorderRadiusBase.borderRadiusCircle })}; 
    align-self: center; 
    justify-self: center;
    width:${px2vw(50)} ;
    height:${px2vw(50)} ;
    line-height:${px2vw(50)} ;
    opacity:0.8;
    border:6px solid #fff;
    overflow: hidden;
    background:url(${TravlIcon})center center no-repeat;
    background-size: ${px2vw(50)} ;
    text-align:center;
    ${media.bigdesktop} {
        width:${px2vw(50, 1440)} ;
        height:${px2vw(50, 1440)} ;
        background-size: ${px2vw(50, 1440)} ;
    }
    ${media.desktop} {
        width:${px2vw(50, 1024)} ;
        height:${px2vw(50, 1024)} ;
        background-size: ${px2vw(50, 1024)} ;
    }
    ${media.tablet} {
        width:${px2vw(40, 768)} ;
        height:${px2vw(40, 768)} ;
        background-size: ${px2vw(40, 768)} ;
    }
    ${media.phone} {
      width:${px2vw(40, 576)} ;
      height:${px2vw(40, 576)} ;
      background-size: ${px2vw(40, 576)} ;
      border:3px solid #fff;

   }
  }
`;

export const SearchInputBox = styled.div`
  ${FlexBox};
  max-width: 1220px;
  ${WH({ width: '96%' })};
  justify-items: center;
  ${Margin({ all: '0' })};
  & div :first-child{
     width: 20%;
     margin-left:1px;
  }
   & div :nth-child(2){
     ${FlexBox};
    width: 60%;
    
   }
   & div :last-child{
     ${FlexBox};
     width: 20%;
   }
`;

export const WorldText = styled.h1`
  ${Font({ color: FontColor.colorFontPrimary, size: '3.5em', fontWeight: 'bold' })};
  text-align: left;
  margin:0 1.25rem 0 0;
  ${media.tablet} {
      ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXXXL, fontWeight: 'bold' })};
  }
  ${media.phone} {
      ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXXL, fontWeight: 'bold' })};
  }
`;

export const StyledInput: typeof Input = styled(Input) <InputProps>`
  outline: 0;
  text-decoration: .25rem solid underline;
  line-height: 2;
  text-underline-offset: 1.3333vw;
  border: .0313rem solid  #16a085;
  width: 100%;
  ${media.tablet} {
      height:${px2vw(40, 768)} ;
  
  }
  ${media.phone} {
      height:${px2vw(25, 576)} ;
  }
`;

export const PrimaryButton = styled.button`
text-align: center;
line-height:${px2vw(20)};
${Margin({ left: '30px' })};
width: 86px;
height:45px;
${Buttons({ color: "#fff", hoverBackgroundColor: '#4CAF50', fontSize: FontSizes.sizeL })};
${BorderRadius({ all: BorderRadiusBase.borderRadiusSmall })};
${media.tablet} {
     width: ${px2vw(60, 768)};
     height: ${px2vw(30, 768)};
     font-size:.5em;
     ${Buttons({ color: "#fff", hoverBackgroundColor: '#4CAF50' })}
  }
  ${media.phone} {
      width: ${px2vw(40, 576)};
      height: ${px2vw(20, 576)};
      font-size:.5em;
      ${Buttons({ color: "#fff", hoverBackgroundColor: '#4CAF50' })}
  }
`;