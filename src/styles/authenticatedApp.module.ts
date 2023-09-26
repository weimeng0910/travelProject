import styled from 'styled-components/macro';
import media from "@/styles/tools/media";
/**
 * @date 2023/05/30
 * @description authenticatedApp-css
 */

export const Layout = styled.div`
  display: grid;
  width: 100%;
  /* 栅格的行 */
  grid-template-rows: 4vw 1fr 4vw;
  /* 栅格的列 */
  grid-template-columns:  1fr 16vw;
  /*行间距*/
  grid-row-gap: 1.5vw;
  /*列间距*/
  grid-column-gap: 1.5vw;
  justify-content: center;
  /* 定义网格布局中网格区域(Grid Area) */
  grid-template-areas:
    'header   header'
    'main  aside'
    'foorer   foorer'; 
    /* ipad */
 ${media.tablet} {
   width: 100%;
  }
  /* iphone6 7 8 plus */
  ${media.phone} {
    width: 100%;
    
  }

`;

type VisibleProps = {
  visible: boolean;
}

export const Main = styled.main<VisibleProps>`
  grid-area: main;
  display: flex;
  flex-grow: 1;
  flex: 1;
  flex-direction: column;//盒子中元素按列排列
  align-content: flex-start;
  background-color: #fff;
  /* ipad */
 ${media.tablet} {
   
    margin-top:${(props: VisibleProps) =>
    props.visible ? "4vw" : "3vw"};;
  }
  /* iphone6 7 8 plus */
  ${media.phone} {
   
    margin-top:${(props: VisibleProps) =>
    props.visible ? "100vw" : "10vw"};
  }

`;

export const Aside = styled.aside`
  grid-area: aside;
  display: flex;
  z-index: -1;
  flex: 1;
  flex-shrink:0;//Aside不会缩放
  background-color: #1abc9c;
  ${media.tablet} {

    display: none;
  }
  ${media.phone} {
    /* 栅格的列 */
    display: none;
    
  }
  
`;
export const Footer = styled.footer`
  grid-area: foorer;
  z-index: -2;
  border-bottom: solid .3125rem #16a085;
  background-color: #fff;
`;
