/*
 * @Date:  2023/05/30 12:18:22
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-30 12:14:17
 * @FilePath: /travelProject/src/components/serchPanel/SearchPanel.module.ts
 * @Description: Homepage-css
 */
import styled from 'styled-components';
import media from "@/styles/tools/media";
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

import { Font, Buttons, WH, Margin, FlexBox, GridBox, BorderRadius } from '@/styles/tools/logicalMixins';
import { FontColor, BorderRadiusBase, SizeBase } from '@/styles/settings/var';
import TravlIcon from '@/assets/icon/travel01.png';
import Balloon from '@/assets/icon/balloon.png';

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
  ${Font({ color: FontColor.colorFontGrey, fontWeight: 'bold' })};
  ${WH({ width: '96%' })};
  font-size:clamp(16px, 4vw, 50px);

  & div :last-child{
    ${Margin({ left: 'auto', right: SizeBase })};
    ${BorderRadius({ all: BorderRadiusBase.borderRadiusCircle })}; 
    align-self: center; 
    justify-self: center;
    width:clamp(30px, 4vw, 60px);
    height:clamp(30px, 4vw, 60px);
    line-height:clamp(30px, 4vw, 60px);
    opacity:0.8;
    border:6px solid #fff;
    overflow: hidden;
    background:url(${TravlIcon})center center no-repeat;
    background-size: clamp(30px, 4vw, 60px);
    text-align:center;
    
  }
`;

export const SearchInputBox = styled.div`
  ${FlexBox};
  max-width: 1220px;
  ${WH({ width: '96%' })};
  justify-items: center;
  ${Margin({ all: '0' })};
  & div :first-child{
     ${FlexBox};
     justify-content: flex-start;
     width: 20%;

     & div :first-child{
      width: 60%;
       ${Font({ color: FontColor.colorFontPrimary, fontWeight: 'bold' })};
       font-size:clamp(16px, 3vw, 50px);
     }
     & div :last-child{
        width:clamp(20px, 3vw, 50px); 
        height:clamp(30px, 4.5vw, 60px); 
        background:url(${Balloon})center center no-repeat;
        background-size: clamp(20px, 3vw, 50px); 
        text-align:center;
    }
    ${media.phone} {
      & div :last-child{
        display: none;
      }
  }
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


export const StyledInput: typeof Input = styled(Input) <InputProps>`
  outline: 0;
  text-decoration: .25rem solid underline;
  line-height: 2;
  text-underline-offset: 1.3333vw;
  border: .0313rem solid  #16a085;
  width: 100%;
  height:clamp(25px, 3vw, 50px);
  
`;

export const PrimaryButton = styled.button`
 text-align: center;
 width: clamp(50px, 6vw, 86px);
 height:clamp(20px, 3vw, 50px);
 ${Buttons({ color: "#fff", hoverBackgroundColor: '#4CAF50' })};
 ${Margin({ left: '30px' })};
 ${BorderRadius({ all: BorderRadiusBase.borderRadiusSmall })};
 font-size:clamp(8px, 1vw, 18px);
`;