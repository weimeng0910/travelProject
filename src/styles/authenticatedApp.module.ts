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
  grid-row-gap: 1.5vw;

  grid-template-areas:
    'header   header'
    'main  main'
    'foorer   foorer'; 

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
  
  width: 100%;
  /* ipad */
 ${media.tablet} {
   
    margin-top:${(props: VisibleProps) =>
    props.visible ? "43vw" : "2vw"};;
    
  }
  /* iphone6 7 8 plus */
  ${media.phone} {
   
    margin-top:${(props: VisibleProps) =>
    props.visible ? "100vw" : "6vw"};
    
  }

`;


export const Footer = styled.footer`
  grid-area: foorer;
  z-index: -2;
  border-bottom: solid .3125rem #16a085;
  background-color: #fff;
  
`;
