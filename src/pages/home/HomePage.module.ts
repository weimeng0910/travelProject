import styled from 'styled-components/macro';
import media from "@/styles/media";
/**
 * @date 2023/06/30
 * @description Homepage-css
 */

export const Container = styled.div`
  display: flex;
  margin-left: 10px;
  width: 100%;
  border-radius: 25px;
  background: #ecf0f1;
`;
export const MenuLayout = styled.div`
  margin-left: 10px;
  border-radius: 25px;
  padding: 4px 14px;
  width: 40%;
  height: 400px;
  background-color: #f5f6fa;
  ${media.tablet} {
   display: none;
  }
`;

export const MainLayout = styled.div`
  margin-left: 10px;
  border-radius: 25px;
  padding: 4px 14px;
  width: 100%;
  height: 400px;
  background-color: #F5FAF8;
     
`;