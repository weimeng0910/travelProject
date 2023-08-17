import styled from 'styled-components/macro';
import media from "@/styles/media";
/**
 * @date 2023/05/30
 * @description Header-css
 */



export const Container = styled.header`
  /*position: sticky;*/
  grid-area: header;
  z-index: 1;
  background-color: #fff;
  /* grid中的子元素设置弹性盒子flex */
  top:0;
  width: 100%;
  border-bottom: solid 5px #16a085;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  position: fixed;//元素的位置相对于浏览器窗口是固定位置
  align-items: center;//让盒子中的弹性元素居中对齐
  

`;
export const Navbar = styled.div`
  display: flex;
  width:100vw;//设定宽度让导航在页面居中
  /*height: 80px;*/
  margin: 0 auto; //居中对齐
  padding: 15px 0;
  /*align-items: center;*/
  text-align: center;
  line-height: 3rem;
  
  

   ${media.phone} {
    /*flex-flow: row wrap;//让盒子内的弹性元素换行*/
    width: 90%;
    padding: 25px 0;
  }
  
`;
export const HeaderLeft = styled.h2`
  display: flex;
  color: #16a085;
  font-weight: bold;
  margin: 0 auto; //居中对齐
  margin-left: 20px;
 ${media.phone} {
     flex:1;
     text-align:left;
     margin-right: auto;
     /*padding: .5rem;*/
  }

  
`;
export const LogoFont = styled.h1`
  display: flex;
  color: #16a085;
  font-weight: bold;
  margin: 0 auto; //居中对齐
 ${media.phone} {
     flex:1;
     text-align:left;
     margin-right: auto;
   
  }

  
`;
export const MenuButton = styled.label`
  display: none;
 
  color: #16a085;
  cursor: pointer;

 ${media.phone} {
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
	flex-grow: 1;
  
  ${media.phone} {
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
  margin: 0 auto; //居中对齐
  align-items: center;
  padding-right: 10px;

  ${media.phone} {
    position: absolute;
    left: 30px;
    top: 24rem;
    display: ${(props: VisibleProps) =>
    props.visible ? "block" : "none"};
  }
  


`;
export const Links = styled.ul`
  display: flex;
  margin: 0 auto; //居中对齐
  
  justify-content:space-evenly;//盒子内元素平均分配
 ${media.tablet} {
    flex-direction: column;
		margin: 8px, 0;
    margin-right: 30px;
  }
  
  

`;
export const Li = styled.li`
  display: flex;
  color: #4b4949;
  font-weight: bold;
  text-align: center;
  line-height: 3rem;
  margin-right: 20px;
  &:hover {
      color: hotpink; // <Thing> when hovered
    } 
   
  ${media.tablet} {
    
		margin: 8px, 0;
   
  }
  
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
  padding: .3rem 1rem;
 
`;
