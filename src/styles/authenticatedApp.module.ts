import styled from 'styled-components/macro';
import media from "@/styles/media";
/**
 * @date 2023/05/30
 * @description authenticatedApp-css
 */

export const Container = styled.div`
  display: grid;
  /* 栅格的列 */
  grid-template-columns: 20rem 1fr 20rem;
  /* 栅格的行 */
  grid-template-rows: 6rem 1fr 6rem;
  /*行间距*/
  grid-row-gap: 24px;
  /*列间距*/
  grid-column-gap: 20px;
  justify-content: center;
  /* 定义网格布局中网格区域(Grid Area)，一个网格区域由单个或多个单元格组成，重复网格区域的名称可让区域内容跨越这些单元格。 */
  grid-template-areas:
    'header header header'
    'main main aside'
    'foorer foorer foorer';
    ${media.tablet} {
    /* 栅格的列 */
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0px;
  }
     
`;
type VisibleProps = {
  visible: boolean;
}
export const Main = styled.main<VisibleProps>`
  grid-area: main;
 
  /*display: flex;*/
  background-color: #fff;
  ${media.tablet} {
    /* 栅格的列 */
    margin-top:${(props: VisibleProps) =>
    props.visible ? "12rem" : "0"};;
  }

`;
export const Nav = styled.nav`
  grid-area: nav;
  display: flex;
  
  background-color: #ecf0f1;
 
 
`;
export const Aside = styled.aside`
  grid-area: aside;
  display: flex;
  
  height: 200px;
  background-color: #1abc9c;
  ${media.tablet} {
    /* 栅格的列 */
    display: none;
    
  }
  
`;
export const Footer = styled.footer`
  grid-area: foorer;
  display: flex;
  border-bottom: solid 5px #16a085;
  background-color: #fff;
`;
