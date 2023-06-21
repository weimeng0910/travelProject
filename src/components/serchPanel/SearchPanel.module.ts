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

   font-size: 20px;

  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto; //居中对齐
  align-items: center;
  width: 100%; 
  
`;
export const WorldText = styled.h1`
  font-size: 50px;
  color: #21BA71;
  margin-right: 20px;
  ${media.tablet} {

   font-size: 20px;

  }

`;
export const NewInput: typeof Input = styled(Input) <InputProps>`
  border: 0;
  outline: 0;
  width: 600px;
  text-decoration: 4px solid underline;
  line-height: 2;
  text-underline-offset: 10px;
  border: 0.5px solid #21BA71;
  ${media.tablet} {
    
    width: 90%;
   
  }

`as any;
export const NewButton: typeof Button = styled(Button) <ButtonProps>`
  background-color: #21BA71;
  &:hover {
      background-color: #2ecc71; 
    } 
  
`as any;
