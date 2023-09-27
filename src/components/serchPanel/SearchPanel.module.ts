import styled from 'styled-components';
import media from "@/styles/tools/media";
import { Input, Button } from 'antd';
import { InputProps } from 'antd/lib/input';
import { ButtonProps } from 'antd/lib/button';
import { Font } from '@/styles/tools/logicalMixins';//通用Mixins
import { FontColor, FontSizes } from '@/styles/settings/var';//基准变量
/**
 * @date 2023/05/30
 * @description Homepage-css
 */
export const WelcomeText = styled.div`
  ${Font({ color: FontColor.colorFontGrey, size: FontSizes.sizeXXXL, fontWeight: 'bold' })};
  width: 100%; 
 
  ${media.tablet} {

    ${Font({ color: FontColor.colorFontGrey, size: FontSizes.sizeXXL ,fontWeight: 'bold' })};
  }
  ${media.phone} {

   ${Font({ color: FontColor.colorFontGrey, size: FontSizes.sizeXL,fontWeight: 'bold'  })};
  }
`;

export const Container = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  
`;
export const SearchInputBox = styled.div`
  
  display: grid;
  grid-template-columns: auto 6.25rem;
  align-items: center;
  width: 100%;
  flex-shrink: 1;
`;
export const WorldText = styled.h1`
 
  ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXXXL, fontWeight: 'bold' })};
  text-align: center;
  margin:0 1.25rem 0 0;


  ${media.tablet} {

    ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXL, fontWeight: 'bold' })};

  }
  ${media.phone} {

    ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeXL, fontWeight: 'bold' })};
  }
`;
export const NewInput: typeof Input = styled(Input) <InputProps>`

  outline: 0;
  text-decoration: .25rem solid underline;
  line-height: 2;
  text-underline-offset: .625rem;
  
  border: .0313rem solid  #16a085;
  flex-shrink: 1;
  
  ${media.phone} {
  
   
   line-height: 1;
  }
  ${media.phone} {

   line-height: 1;
  }
`as any;

export const NewButton: typeof Button = styled(Button) <ButtonProps>`
  
  background-color: #16a085;
  margin-left: 1.25rem;
  &:hover {
      background-color: #2ecc71; 
    } 

  
`as any;

