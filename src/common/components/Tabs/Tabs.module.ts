/*
 * @Date: 2023-11-02 13:50:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-12-11 18:38:49
 * @FilePath: /travelProject/src/common/components/Tabs/Tabs.module.ts
 * @Description: Tabs style
 */
import styled from 'styled-components';
import { px2vw } from '@/common/hooks';

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
    height: clamp(20px, 3vw, 40px);
    width:clamp(26px, 10vw, 160px);
    line-height:clamp(20px, 3vw, 40px);
    color:#fff;
    padding: 0 4px 0 5px;
    text-align: center;
    margin: 0 4px 0 18px;
    a{
      color:#fff;
    }
    ${media.phone} {
       a {
        display: none;
       }
      
    }
    &:before,
    &:after{
        content: "";
        position:absolute;
        top: 0;
        border:0 solid ${Color.colorPamary};
        border-width:clamp(10px, 1.5vw, 20px) 10px;
        /*border-width:clamp(20px, 2vw, 40px) clamp(20px, 2vw, 10px);*/
        width: 0;
        height: 0;
        color:#fff;
        
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
          color:#fff;
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
  display: flex;
 
  width: 100%;
  
`;
export const IconStyle = styled.div`
  width: clamp(10px, 2vw, 20px);
  height: clamp(10px, 2vw, 20px);

`;

