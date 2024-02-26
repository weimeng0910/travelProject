/*
 * @Date: 2024-01-24 13:42:58
 * @Description: style 
 */
import styled from "styled-components";

import media from "@/styles/tools/media";
import { px2vw } from '@/common/hooks';



export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top:15px;
  width: 1165px;
  max-width:1165px;
  align-items:center;
  

   ${media.bigdesktop} {
       width:${px2vw(1165, 1440)} ;    
   }
   ${media.desktop} {
       width:${px2vw(1000, 1024)} ;
   }
   ${media.tablet} {
       width:${px2vw(758, 768)} ;
   }
   ${media.phone} {
       width:${px2vw(566, 576)} ;
   }

     
`;