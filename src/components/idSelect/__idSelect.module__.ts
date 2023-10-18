/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-10-11 15:02:14
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-12 11:06:42
 * @FilePath: /travelProject/src/components/idSelect/idSelect.module copy.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled, { css } from "styled-components";
import { Select } from 'antd';
/**
 * @date 2023/10/10
 * @description SelectStyle
 */
export const CustomSelect = styled(Select)`
    display: block;
    overflow: hidden;
    line-height: 4.5vw;
    box-sizing: border-box;
    background:#fff;
    ${Transition({ properties: 'all', time: '0.2s' })}
    ${Size({ minWidth: '4.5vw' })};
    ${Font({ color: FontColor.colorFontPrimary, size: FontSizes.sizeK, fontWeight: 'bold' })};
    ${WH({ width: '16vw', height: '4.5vw' })};
    ${BorderRadius({ all: '3.12vw' })};
    
    &:hover {
    ${WH({ width: '20vw' })}
    ${Font({ color: FontColor.colorFontWhite, size: FontSizes.sizeK, fontWeight: 'bold' })};
    ${BaseShadow(BaseBoxShadow.boxShadowBase)}
    background-color: #77c2a5;
    };
  &.ant-select {
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 16vw !important;
    height: 4.5vw !important;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-feature-settings: 'tnum';
    background: none!important;

  }
  & .ant-select-selector {    
    background: none!important;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

}

   & .ant-select-selection-item{
    width: 16vw;
    height: 4.5vw !important;
    line-height: 4.5vw !important;
    text-align:center;
    color:  #16a085;
    font-size: 1vw;
    margin-right:1.5vw;
    background-color:none !important;
   
    &:hover{
     color:  #fff; 
    }
     
  }
  & .ant-select-arrow {

    height: 2vw!important;
    line-height: 2vw !important;
    color:  #16a085; 
    border: none !important;
    background: none!important;
    &:hover{
     color:  #fff; 
    }
  }

  `;
