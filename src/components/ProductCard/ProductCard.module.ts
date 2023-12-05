/*
 * @Date: 2023-10-13 09:30:53
 * @Description: CardStyle
 */

import styled from "styled-components";
import {
  BorderRadius,
  Font,
  GridBox,
  BaseShadow,
  Ellipsis,
  Padding,
  Margin,
  Center,
  FlexBox,
  Absolute,
  WH,
  Size,
  Transition,
} from '@/styles/tools/logicalMixins';
import {
  BorderRadiusBase,
  BackgroundColor,
  FontColor,
  FontSizes,
  BaseBoxShadow,
} from '@/styles/settings/var';
import media from "@/styles/tools/media";


export const Container = styled.div`
   margin-top:15vw;
   margin-right:10px;
   /* css var */ 
   --main-color: #fff; 
   --f-color: #444;

   
   div{
      position:relative;
      height: 14vw;
      width: 32vw;
      color: #fff;
      background-image: radial-gradient( circle at right center, #F5FAF8 1.6vw, var(--main-color) 1.3vw );
      border-radius:.8vw;
       
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
        font-size: .7rem;
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
