import styled from 'styled-components';
import { Carousel } from 'antd';
import media from "@/styles/media";
/**
 * @date 2023/08/24
 * @description Carousel Css
 */

export const AntCarousel = styled(Carousel)`

  border-radius: 25px;  
  text-align: center;
  height: 300px;
  line-height: 300px;
  background: #364d79;
  overflow: hidden;
${media.phone} {
   height: 20vh;
   line-height: 20vh;
  }
 

`