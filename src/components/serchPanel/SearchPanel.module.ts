import styled from 'styled-components';
import media from "@/styles/media";
import { Input, Button } from 'antd';
import { InputProps } from 'antd/lib/input';
import { ButtonProps } from 'antd/lib/button';
/**
 * @date 2023/05/30
 * @description Homepage-css
 */
export const WelcomeText = styled.h1`
  font-size: 40px;
  color: #7f8c8d;
  width: 100%; 
 
  ${media.tablet} {

   font-size: 30px;

  }
  ${media.phone} {

  font-size: 20px;
  }
`;

export const Container = styled.div`
  
  display: flex;
  align-items: center;
  width: 100%;
  
  
`;
export const SearchInputBox = styled.div`
  
  display: grid;
  grid-template-columns: auto 100px;
  align-items: center;
  width: 100%;
  flex-shrink: 1;
`;
export const WorldText = styled.h1`

  font-size: 50px;
  color: #16a085;
  margin-right: 20px;
  flex-shrink: 1;

  ${media.phone} {

   font-size: 30px;

  }
  ${media.phone} {

  font-size: 20px;
  }
`;
export const NewInput: typeof Input = styled(Input) <InputProps>`

  outline: 0;
  text-decoration: 4px solid underline;
  line-height: 2;
  text-underline-offset: 10px;
  border: 0.5px solid  #16a085;
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
  margin-left: 20px;
  &:hover {
      background-color: #2ecc71; 
    } 

  
`as any;

