/*
 * @Date: 2023-10-18 17:03:02
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-01 18:19:34
 * @FilePath: /travelProject/src/components/BestRestaurants/BestRestaurants.module.ts
 * @Description:BestRestaurants css
 */
import styled from 'styled-components';
import { HeartTwoTone } from '@ant-design/icons';
import { px2vw } from '@/utils';
import media from "@/styles/tools/media";
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
  Center,
  Transition

} from '@/styles/tools/logicalMixins';
import {
  BorderRadiusBase,
  BackgroundColor,
  FontColor,
  FontSizes,
  BaseBoxShadow,
  ZIndex,
  a11yHidden
} from '@/styles/settings/var';


/**
 * ProductCollection Css
 */

export const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr ;
    /*grid-template-areas:
        'header '
        ' main ';*/
    height: 100%;
    width: 100%;
    /* 各单位之间的距离 */
    grid-gap: 10px;
    /*position:relative;*/
    margin-top:2vw;
    align-items:center;
    justify-items:center;
    /*justify-content:center;
    align-content:center;*/

    /*background-color:red;*/
       /* css var */ 
   --main-color: #fff; 
   --f-color: #444;
   div{
      position:relative;
      height: 14vw;
      width: 34vw;
      color: #fff;
      background-color:#fff;
      background-image: radial-gradient( circle at right center, #F5FAF8 1.6vw, var(--main-color) 1.3vw );
      border-radius:.8vw;
      cursor: pointer;
      ${Transition({ properties: 'all', time: '0.4s' })};
      &:hover {
          transform: translate(0,-0.625rem);
          ${BaseShadow(BaseBoxShadow.boxShadowDark)};
          background-image:none;
          
        }
      span{
        display: inline-block;
        position:absolute;
        top: 0;
        right: 0;
        right: -3px;
        bottom: 0;
        margin: auto;
        width:1.4vw;
        height: 2.2vw;
        border-radius:1.5vw;
        font-size: 1rem;
        color: #fff;
        writing-mode: vertical-rl;
        text-align: center;
        cursor: pointer;
        background-color:#84CAA6;

        &:hover{
          opacity: 0.6;
          background-color:#84CAA6;
        }
      }
   }
`;