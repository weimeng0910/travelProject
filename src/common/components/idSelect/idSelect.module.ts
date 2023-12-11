/*
 * @Date: 2023-10-10 11:00:09
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-18 14:36:26
 * @FilePath: /travelProject/src/components/idSelect/idSelect.module.ts
 * @Description: SelectStyle
 */

import styled from "styled-components";
import Select from 'react-select';
import media from "@/styles/tools/media";

export const StyledSelect = styled(Select)`

  .Select__control {
      margin: 0;
      padding: 0;
      height: 4.5vw;
      width: 100%;
      box-sizing: border-box;
      border: none !important;
      background:none !important;
      &:hover {
       .css-1dimb5e-singleValue { 
        color: #fff;
       }
       .Select__dropdown-indicator {
        color: #fff;
       }
      }
      ${media.tablet} {
       .css-art2ul-ValueContainer2 {
        display: block;
      }
       .Select__dropdown-indicator {
        display: none;
       }
      }
    ${media.phone} {
      .css-art2ul-ValueContainer2 {
        display: block;
      }
    } 
  }
  .Select__input{
    margin: 0;
    padding: 0;
    background:none!important;
  }
  
  .Select__control--is-focused {
    box-shadow: none;
    outline: none;
    border: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    margin-top: .5vw;
    width: 20vw;
    color: #16A085;
    
  }
  .Select__dropdown-indicator {
  
     background-color:none;  
     color: #16A085;

  }
  .css-1dimb5e-singleValue {
    font-size:1.5em;
    color: #16A085;
    ${media.tablet} {
       font-size:1em;
      }
    ${media.phone} {
      font-size:1em;
    } 
 }
 .css-w9q2zk-Input2 {
    margin: 0;
    padding:0;
    height: 4vw;
    font-size: 1em;
    box-sizing: border-box;
}
.css-art2ul-ValueContainer2 {
  padding: 0;
}
`;
