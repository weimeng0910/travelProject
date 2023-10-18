/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-08-25 18:51:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-17 18:35:16
 * @FilePath: /travelProject/src/styles/base/global-styles.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createGlobalStyle } from 'styled-components'
/**
 * @date 2023/05/30
 * @description Global css 
 */

export const GlobalStyles = createGlobalStyle`

  html{
    scroll-behavior: smooth;
  }

  body {
    margin: 0px;
    padding: 0px;
    font-family: sans-serif;
    box-sizing: border-box;
   
  }
  :root{
  font-size:.75vw
  }
  @media  (max-width:320px) {
    html {
        font-size: .3vw
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