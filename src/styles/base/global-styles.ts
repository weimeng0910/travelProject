/*
 * @Date: 2023-05-30 18:51:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-25 12:02:54
 * @FilePath: /travelProject/src/styles/base/global-styles.ts
 * @Description: Global css 
 */

import { createGlobalStyle } from 'styled-components';
import { px2vw } from '@/utils';
/**
 * Global css 
 */

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    margin-top:0;
    padding-top:0;
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
  }

  body {
    margin: 0px;
    padding: 0px;
    margin-top:0;
    padding-top:0;
    font-family: sans-serif;
    box-sizing: border-box;
   
  }
  :root{
     font-size:${px2vw(24)};
     
     @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }

  }
  
  p, h1, h2, h3, h4 {
    margin-bottom: 0;
  }

  button { 
    cursor: pointer;
  }

  ul, li {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
 
`