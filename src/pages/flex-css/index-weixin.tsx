import React from 'react';
import styled from '@emotion/styled';
/**
 * @author meng
 * @version 1.0
 * @date 2023/01/23
 * @file 弹性盒模型-微信布局
 */

export default function Text3() {
  return (
    <Div>
      <Main>111</Main>
      <Footer>
        <div>后盾人</div>
        <div>直播</div>
        <div>教程</div>
        <div>视频</div>
      </Footer>
    </Div>
  );
}
//CssInJs
const Div = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled('main')`
  background: #ddd;
  flex: 1;
`;

const Footer = styled('footer')`
  background: linear-gradient(to bottom, #f3f3f3, #ccc, #f3f3f3);
  height: 50px;
  display: flex;
  justify-content: space-evenly; //对齐方式平均分配
  div {
    flex: 1;
    text-align: center; //文本居中
    line-height: 3em;
    color: #555;
  }
  //调整元素边线，这里不能用nth-child(),会出现报错
  div:nth-of-type(n + 2) {
    border-left: solid 1px #ccc;
  }
`;
//const FooterDiv = styled('div')`
//  flex: 1;
//  text-align: center; //文本居中
//  line-height: 3em;
//  color: #555;
//`;
