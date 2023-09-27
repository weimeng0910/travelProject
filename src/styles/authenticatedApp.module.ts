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
  /* grid-template-columns:  1fr ; */
  /*行间距*/
  grid-row-gap: 1.5vw;
  /*列间距*/
  /* grid-column-gap: 1.5vw;
  justify-content: center; */
  /* 定义网格布局中网格区域(Grid Area) */
  grid-template-areas:
    'header   header'
    'main  main'
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
  margin-top: 1vw;
  width:100vw;
  /* ipad */
 ${media.tablet} {
   
    margin-top:${(props: VisibleProps) =>
    props.visible ? "4vw" : "3vw"};;
    width:100vw;
  }
  /* iphone6 7 8 plus */
  ${media.phone} {
   
    margin-top:${(props: VisibleProps) =>
    props.visible ? "100vw" : "10vw"};
    width:100vw;
  }

`;


export const Footer = styled.footer`
  grid-area: foorer;
  z-index: -2;
  border-bottom: solid .3125rem #16a085;
  background-color: #fff;
  width: 100%;
`;
