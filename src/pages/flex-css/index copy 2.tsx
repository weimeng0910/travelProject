import React from 'react';
import styled from '@emotion/styled';
/**
 * @author meng
 * @version 1.0
 * @date 2023/01/23
 * @file 弹性盒模型-多行元素在交叉轴的排列方式
 */

export default function Text3() {
  return (
    <Div>
      {/*<Main>111</Main>*/}
      <Footer>
        <div>后盾人</div>
        <div>直播</div>
        <div>教程</div>
        <div>直播</div>
        <div>教程</div>
        <div>直播</div>
        <div>教程</div>
        <div>教程</div>
      </Footer>
    </Div>
  );
}
//CssInJs
const Div = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
//const Main = styled('main')`
//  background: #ddd;
//  flex: 1;
//`;

const Footer = styled('footer')`
  border: solid 5px blueviolet;
  width: 250px;
  height: 550px;
  display: flex;
  /*flex-direction: row; //弹性盒中元素水平从右侧排列*/
  /*flex-direction: column; //弹性盒中元素垂直排列*/
  /*flex-wrap: wrap; //换行*/
  flex-flow: row wrap; //代替上面两行
  justify-content: space-evenly; //盒子内元素完全平均分布
  /*align-items: stretch; // 让元素布满盒子，但要去掉元素相关的宽度或高度*/
  align-content: space-between; //多行排列方式

  div {
    width: 100px;
    height: 100px;
    background: red;
    padding: 10px;
    box-sizing: border-box;
    font-size: 35px;
    color: white;
  }
`;
//const FooterDiv = styled('div')`
//  flex: 1;
//  text-align: center; //文本居中
//  line-height: 3em;
//  color: #555;
//`;
