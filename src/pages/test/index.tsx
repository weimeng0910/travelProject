import React, { useState, useEffect } from 'react';

let arr = [
  {
    id: 1,
    name: '张三',
    score: 153,
  },
  {
    id: 2,
    name: '李四',
    score: 206,
  },
  {
    id: 3,
    name: '王五',
    score: 68.5,
  },
  {
    id: 4,
    name: '王六',
    score: 83.5,
  },
];

export default function Test() {
  const result = arr.filter(item => item.id === 2 || item.name.includes('王'));
  console.log(result, '001');

  return (
    <div>
      <h1>why-did-your-render</h1>
      <h2></h2>
    </div>
  );
}
