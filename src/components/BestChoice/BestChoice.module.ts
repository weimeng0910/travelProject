/*
 * @Date: 2023-10-18 17:03:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-12-08 15:28:23
 * @FilePath: /travelProject/src/components/BestRestaurants/BestRestaurants.module.ts
 * @Description:BestRestaurants css
 */
import styled from 'styled-components';
import { HeartTwoTone } from '@ant-design/icons';
import { px2vw } from '@/common/hooks';
import media from "@/styles/tools/media";
import Bg from '@/assets/images/bg.png';
import TravelerBg from '@/assets/images/illust.png';
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
import TravelChoice from '@/assets/images/2023-001.png';


export const Container = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: nowrap;
   flex-direction: row;
   max-width:1150px;
   background-color:#fff;
   border-radius:clamp(5px, 1.2vw, 18px);
   width: 100%;
   div{
    
    height:clamp(60px, 18vw, 280px)
   }
   
   & div:first-child{
      width: clamp(75px, 30vw, 308px);
      /*height: clamp(60px, 30vw, 280px); */
      background:url(${TravelerBg})center center no-repeat; 
      background-size: clamp(75px, 30vw, 307px) clamp(60px, 30vw, 290px);
      /*width: 100%;*/
      background-color:#000;
   }
   div:nth-child(2){
       display: flex;
       justify-content: flex-start;
       width: 100%;
       width:clamp(160px, 50vw, 500px);
       /*height:clamp(60px, 30vw, 280px);*/
       /*background-color:blue;*/
       margin: 0;
      & ul{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        width:clamp(200px, 40vw, 480px);
        margin:0 0 0 20px;
        li{
          display: block;
        }
         li:first-child{
          
          span{
            display: inline-block;
            width:clamp(20px, 6vw, 80px);
            height: clamp(2px, 1vw, 5px);
            background-color:#acb643;
          }
        }
        li:nth-child(2){
          h1{
            ${Font({ family: 'Arial', color: FontColor.colorFontBlack, fontWeight: 'bold' })};
            font-size:clamp(8px, 1.7vw, 28px);
           
          }
          h2{
            ${Font({ family: 'Arial', color: '#acb643', fontWeight: 'bold' })};
            font-size:clamp(8px, 1.7vw, 28px);
            ${Ellipsis({ webkitLinCclamp: '1' })}
          }
        }
        li:nth-child(3){
          ${Font({ family: 'Arial', color: FontColor.colorFontBlack })};
          font-size:clamp(8px, 1.1vw, 16px);
          ${Ellipsis({ webkitLinCclamp: '5' })}
            
        }
        li:last-child{
          ${Font({ family: 'Arial', color: FontColor.colorFontBlack })};
           font-size:clamp(5px, 1vw, 14px);
        }
        ${media.phone} {
          li:nth-child(3){
            display: none;
          }
             
           }
      }

       
   }
   div:last-child{
      width: clamp(80px, 30vw, 345px);
      /*height: clamp(60px, 30vw, 280px);*/
      background:url(${Bg})center center no-repeat;
      background-size:  clamp(75px, 30vw, 344px) clamp(60px, 30vw, 280px);
      background-color: red;
   }
   ${media.bigdesktop} {
       width:${px2vw(1150, 1440)} ;    
   }
   ${media.desktop} {
       width:${px2vw(1000, 1024)} ;
   }
   ${media.tablet} {
       width:${px2vw(758, 768)} ;
       /*height:${px2vw(60, 768)} ;*/
   }
   ${media.phone} {
       width:${px2vw(566, 576)} ;
   }
`;