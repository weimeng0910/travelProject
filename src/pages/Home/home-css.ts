import styled from 'styled-components/macro';
import media from "@/styles/media";
/**
 * @date 2023/05/30
 * @description Homepage-css
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
  grid-column-gap: 24px;
  justify-content: center;
  /* 定义网格布局中网格区域(Grid Area)，一个网格区域由单个或多个单元格组成，重复网格区域的名称可让区域内容跨越这些单元格。 */
  grid-template-areas:
    'header header header'
    'nav main aside'
    'foorer foorer foorer';
     ${media.sm`
     /* 栅格的列 */
  grid-template-columns: 1fr 1fr;
    
  `}
`;

export const Header = styled.header`
  grid-area: header;
  /* grid中的子元素设置弹性盒子flex */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  border-bottom: solid 5px #16a085;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  
`;
export const HeaderLeft = styled.h2`
  color: #16a085;
  font-weight: bold;
  margin-left: 20px;
  ${media.sm`
    color: #8e44ad;
    
  `}
`;
export const HeaderCenter = styled.div`
  display: flex;
  margin: 0 auto; //居中对齐
  align-items: center;
  ${media.sm`
    display: none;
    
  `}
`;
export const HeaderRight = styled.div`
  display: flex;
  
  margin-right: 40px;
  align-items: center;
`;
export const Main = styled.main`
  grid-area: main;
  height: 200px;
  /*display: flex;*/
  background-color: #1abc9c;
   
`;
export const Nav = styled.nav`
  grid-area: nav;
  display: flex;
  height: 200px;
  background-color: #ecf0f1;
 
`;
export const Aside = styled.aside`
  grid-area: aside;
  display: flex;
  height: 200px;
  background-color: #3498db;
  ${media.sm`
    display: none;
    
  `}
`;
export const Footer = styled.footer`
  grid-area: foorer;
  display: flex;
  border-bottom: solid 5px #16a085;
  background-color: #f1c40f;
`;

export const Links = styled.ul`
  display: flex;
  margin: 0 auto; //居中对齐
  .li {
    color: #4b4949;
    &:hover {
      color: red; // <Thing> when hovered
    }
    
    font-weight: bold;

    margin-right: 20px;
  }
`;
