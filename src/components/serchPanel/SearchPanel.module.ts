/*
 * @Date:  2023/05/30 12:18:22
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-18 11:17:31
 * @FilePath: /travelProject/src/components/serchPanel/SearchPanel.module.ts
 * @Description: Homepage-css
 */
import styled from 'styled-components';
import media from "@/styles/tools/media";
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

import { Font, Buttons, WH, Margin, FlexBox, GridBox, BorderRadius, Em } from '@/styles/tools/logicalMixins';
import { FontColor, FontSizes, BorderRadiusBase } from '@/styles/settings/var';

export const WelcomeText = styled.div`
  ${Font({ color: FontColor.colorFontGrey, size: '3em', fontWeight: 'bold' })};
  ${WH({ width: '100%' })};
  ${media.tablet} {
   ${Font({ color: FontColor.colorFontGrey, size: FontSizes.sizeXXXL, fontWeight: 'bold' })};
  }
  ${media.phone} {
   ${Font({ color: FontColor.colorFontGrey, size: FontSizes.sizeXXL, fontWeight: 'bold' })};
  }
`;

export const Container = styled.div`
  ${FlexBox};
  ${WH({ width: '100%' })};  
`;

export const SearchInputBox = styled.div`
  ${GridBox({ gridTemplateColumns: 'auto 13.3333vw' })};
  ${WH({ width: '100%' })};
`;

export const WorldText = styled.h1`
  ${Font({ color: FontColor.colorFontPrimary, size: '3em', fontWeight: 'bold' })};
  text-align: center;
  margin:0 1.25rem 0 0;
  ${media.tablet} {
   ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXXXL, fontWeight: 'bold' })};
  }
  ${media.phone} {
   ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXXL, fontWeight: 'bold' })};
  }
`;

export const NewInput: typeof Input = styled(Input) <InputProps>`
  outline: 0;
  text-decoration: .25rem solid underline;
  line-height: 2;
  text-underline-offset: 1.3333vw;
  border: .0313rem solid  #16a085;
  flex-shrink: 1;
  ${media.tablet} {
  ${WH({ width: '100%', height: '4vw' })}
  
  }
  ${media.phone} {
   ${WH({ width: '100%', height: '5vw' })};
   
  }
`as any;

export const PrimaryButton = styled.button`
text-align: center;
line-height:2.9vw;
${Margin({ left: '1vw' })};
${WH({ width: '6vw' })};
${Buttons({ color: "#fff", hoverBackgroundColor: '#4CAF50', fontSize: FontSizes.sizeL })};
${BorderRadius({ all: BorderRadiusBase.borderRadiusSmall })};
${media.tablet} {
  ${WH({ width: '8vw', height: '4vw' })}
  ${Buttons({ color: "#fff", hoverBackgroundColor: '#4CAF50', fontSize: FontSizes.sizeL })}
  }
  ${media.phone} {
   ${WH({ width: '10vw', height: '5vw' })};
   ${Buttons({ color: "#fff", hoverBackgroundColor: '#4CAF50', fontSize: FontSizes.sizeK })}
  }
`;