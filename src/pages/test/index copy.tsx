import React, { useState, useEffect } from 'react';

export default function Test() {
  //当obj是基本类型时，不会无限循环
  //当obj是对象的时候，就会无限循环
  //页面每次渲染，这个对象和前一次不同会重新定义，从而引发num不停+1
  //当obj是对象的stata时，不会无限循环
  const [obj, setObj] = useState({ name: 'jake' });
  //const obj = { name: 'jack' };
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log('effect');
    //组件渲染第一次渲染时，会找印并num+1
    setNum(num + 1);
  }, [obj]);
  return (
    <div>
      <h1>why-did-your-render</h1>
      <h2>{num}</h2>
    </div>
  );
}
