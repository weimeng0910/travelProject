import styled from 'styled-components/macro';
import media from "@/styles/media";
/**
 * @date 2023/05/30
 * @description authenticatedApp-css
 */

export const Layout = styled.div`
  display: grid;
  
  /* 栅格的行 */
  grid-template-rows: 6rem max-content 6rem;
  /* 栅格的列 */
  grid-template-columns:  1fr 20rem;
  /*行间距*/
  grid-row-gap: .75rem;
  /*列间距*/
  /*grid-column-gap: 10px;*/
  justify-content: center;
  /* 定义网格布局中网格区域(Grid Area)，一个网格区域由单个或多个单元格组成，重复网格区域的名称可让区域内容跨越这些单元格。 */
  width: 100vw;
  height: 100%;
  grid-template-areas:
    'header   header'
    'main  aside'
    'foorer   foorer';
    ${media.tablet} {
    /* 栅格的列 */
    
    grid-template-columns: auto 0rem;
    grid-column-gap: 0rem;
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
 
  ${media.phone} {
    
    /* 栅格的列 */
    
    margin-top:${(props: VisibleProps) =>
    props.visible ? "18rem" : "0"};;
  }

`;

export const Aside = styled.aside`
  grid-area: aside;
  display: flex;
  z-index: -1;
  flex: 1;
  flex-shrink:0;//Aside不会缩放
  background-color: #1abc9c;
  
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
