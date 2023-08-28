import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import media from "@/styles/media";
import { link } from 'fs';
/**
 * @date 2023/05/30
 * @description Header-css
 */



export const Container = styled.header`
  
  grid-area: header;
  position: fixed;//元素的位置相对于浏览器窗口是固定位置
  /*display: flex;*/
  z-index: 1;
  width: 100%;
  background-color: #fff;
  border-bottom: solid 5px #16a085;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

`;
export const Navbar = styled.div`
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
 
  
  
   ${media.phone} {
    flex-flow: row wrap;//让盒子内的弹性元素换行
   
    padding: 25px 0;
     align-items: center;
  }
  
`;
export const HeaderLeft = styled.div`
  display: flex;
  width: 300px;
  height: 100%;
  justify-content: center;
  align-items: center;
  
  font-weight: bold;
  margin-left: 20px;
  &:hover {
      cursor: pointer;
      color: hotpink; // <Thing> when hovered
    } 
  ${media.tablet} {
     flex:1;
     text-align:left;
     margin-right: auto;
     width: 50%;
     
  }
`;

export const LogoFont = styled.h1`
  display: flex;
  color: #16a085;
  font-weight: bold;
  margin: 0;
 ${media.phone} {
    
     text-align:left;
     margin-right: auto;
   
  }

  
`;
export const MenuButton = styled.label`
  display: none;
  color: #16a085;
  cursor: pointer;
  margin: auto;

 ${media.tablet} {
    display: block;  
		color: #16a085;
		cursor: pointer;
    margin-right: 20px;
		
  }
  
`;
type VisibleProps = {
  visible: boolean;
}
export const HeaderCenter = styled.div<VisibleProps>`
 	display: flex;
  flex: 1;
  justify-content:space-between;
  align-items: center;
  box-sizing: border-box;
  
  
  
  ${media.tablet} {
    position: absolute;
    left: 0px;
    top: 7rem;
    display: ${(props: VisibleProps) =>
    props.visible ? "block" : "none"};
    flex-flow:column;
    margin-bottom:1rem;
  }
  
`;


export const HeaderRight = styled.div<VisibleProps>`
  display: flex; 
  width: 300px;
  justify-content: center;
  align-content: center;
  padding-right: 10px;

  ${media.tablet} {
    position: absolute;
    left: 25px;
    top: 24rem;
    display: ${(props: VisibleProps) =>
    props.visible ? "block" : "none"};
  }
  


`;
export const Links = styled.ul`
  display: flex;
  justify-content:space-between;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 0;
  flex: 1 1 auto;
 
  
 ${media.tablet} {
    flex-direction: column;
		margin: 8px, 0;
    margin-right: 30px;
  }

`;

export const Li = styled.li`
  display: flex;
 
  color: #16a085;
  font-weight: bold;
  text-align: center;//文本居中
  
  margin:0;

  position: relative;
  padding: 0 10px;
  font-size: 18px;
  line-height: 3rem;//3倍字高
  transition: 0.2s all linear;

  /*cursor: pointer;*/
    &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 40%;
            width: 0;
            height: 100%;
            border-bottom: 2px solid #118060;
            transition: 0.2s all linear;
        }

        &:hover{
           color: #95a5a6;
         ::before {
            
            width: 100%;
            top: 0;
            left: 0;
            transition-delay: 0.1s;
            border-bottom-color: #2ecc71;
        }
  }
  ${media.tablet} {
    
		margin: 8px, 0;
   
  }
  
`;
export const NavbarLink = styled(Link)`
  
  
`;
export const SpanIcon = styled.span`
  display: block;
  margin: 0 auto; //居中对齐
  margin-right: 10px;
  
  ${media.phone} {

	margin: 0 5px;

  }
  
`;
export const UserRegister = styled.div`
  font-size: 14px;
  /*border: solid 1px #16a085;*/
  border-radius: .3rem;//圆角
  color: #16a085;
  font-weight: bold;
  padding: .3rem 1rem;
 
`;
