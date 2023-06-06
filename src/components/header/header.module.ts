import styled from 'styled-components/macro';
import media from "@/styles/media";
/**
 * @date 2023/05/30
 * @description Header-css
 */
export const Container = styled.header`
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