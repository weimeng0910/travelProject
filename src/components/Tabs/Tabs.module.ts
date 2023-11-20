/*
 * @Date: 2023-11-02 13:50:04
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-20 18:49:56
 * @FilePath: /travelProject/src/components/Tabs/Tabs.module.ts
 * @Description: Do not edit
 */
import styled from 'styled-components';
import { px2vw } from '@/utils';
import CompassIcon from '@/assets/icon/compass.png';
import {
  BorderRadius,
  Font,
  GridBox,
  BaseShadow,
  Ellipsis,
  Padding,
  Margin,
  Border,
  FlexBox,
  Absolute,
  WH,
  bgMixin,
  Buttons,
} from '@/styles/tools/logicalMixins';
import {
  BorderRadiusBase,
  BackgroundColor,
  FontColor,
  FontSizes,
  BaseBoxShadow,
  Color,
  SizeBase
} from '@/styles/settings/var';
import media from "@/styles/tools/media";
export const TabBar = styled.ul`
 display: inline-block;
  /*padding: 8px 16px;*/
  /*z-index: 1;*/
  /*flex-shrink: 0;*/
  /*display: flex;*/
  /*position: relative;*/
`;

type VisibleProps = {
  TabisSelected: boolean;
}
export const TabBarItem = styled.li<VisibleProps>` 
  float:left;
  span{
    position:relative;
    display:block;
    background:  ${Color.colorPamary};
    text-decoration: none;
    height: 40px;
    max-width: 160px;
    width:${px2vw(150)} ;
    line-height:40px;
    color:#fff;
    padding: 0 5px 0 5px;
    text-align: center;
    margin: 0 5px 0 18px;
    ${media.bigdesktop} {
       width:${px2vw(160, 1440)} ;    
    }
    ${media.desktop} {
       width:${px2vw(100, 1024)} ;
    }
    ${media.tablet} {
       width:${px2vw(80, 768)} ;
       a :last-child{
        display: none;
       }
    }
    ${media.phone} {
       width:${px2vw(58, 576)} ;
       a :last-child{
        display: none;
       }
      
    }
    &:before,
    &:after{
        content: "";
        position:absolute;
        top: 0;
        border:0 solid ${Color.colorPamary};
        border-width:20px 10px;
        width: 0;
        height: 0;
      }
    &:before{
        left:-20px;
        border-left-color:transparent;
        
      }
    &:after{
        left:100%;
        border-color:transparent;
        border-left-color:${Color.colorPamary};
      }
     &:hover {
          background-color: #47CF73;
      
        &:after {
          border-left-color: #47CF73;
        }
        &:before{
         border-color:#47CF73;
         border-left-color:transparent;
        
      }
    }
  
 }
 &:last-child{
    span{
      border-radius:0 4px 4px 0;
      padding-right:15px;
    &:after{
      border:none;
    }
    }
   }
`;

export const TabContent = styled.div`
  background: #fff;
  display: flex;
  flex: 1;
  height: 100%;
  div {
    flex-shrink: 0;
    width: 100%;
    overflow-y: auto;
  }
`;
export const IconStyle = styled.div`
  width: 20px;
  height: 20px;

`;

