import React, { useRef } from 'react';
import styled from '@emotion/styled';
//定义全局样式
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;
const Box = styled.div`
  border: 3px solid #666;
  background-color: #ddd;
  border-radius: 0.5em;
  padding: 10px;
  cursor: move;
`;

export default function HtmlDnd() {
  //获取dom节点
  const refBox = useRef(null);
  //点击事件
  const handleDragStart = () => {
    console.log(refBox, '001');
  };

  //let items = document.querySelectorAll('.container .box');
  //items.forEach(function (item) {
  //  item.addEventListener('dragstart', handleDragStart);
  //  item.addEventListener('dragend', handleDragEnd);
  //});
  return (
    <Container>
      <Box ref={refBox} onClick={() => handleDragStart()} draggable="true">
        A
      </Box>
      <Box draggable="true">B</Box>
      <Box draggable="true">C</Box>
    </Container>
  );
}
