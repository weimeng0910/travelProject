import React, { useState, useRef, useEffect } from 'react';

export default function ReduxText() {
  //设置计数
  const [count, setCount] = useState(0);
  //设置select状态
  const [selectNumber, setSelectNumber] = useState<Number>();
  const selectElement = useRef<HTMLSelectElement>(null);
  //useEffect(() => {
  //  if (selectElement.current != null) {
  //    console.log(selectElement.current.value);
  //  }
  //}, []);
  const changSelectVal = () => {
    //类型保护
    if (selectElement.current != null) {
      const { value } = selectElement.current;
      console.log(typeof value);

      setSelectNumber(Number(value));
    }
    //setCount(selectElement.current);
  };
  //加法
  const incerment = () => {
    //类型守卫
    if (selectElement.current != null) {
      const { value } = selectElement.current;
      setCount(count + Number(value));
    }
  };
  //减法
  const decaese = () => {
    if (selectElement.current != null) {
      const { value } = selectElement.current;
      setCount(count - Number(value));
    }
  };
  //奇数加
  const incermentOfAdd = () => {
    if (selectElement.current != null) {
      const { value } = selectElement.current;
      if (count % 2 != 0) {
        setCount(count + Number(value));
      }
    }
  };
  //异步加
  //奇数加
  const incermentAsncy = () => {
    if (selectElement.current != null) {
      const { value } = selectElement.current;
      setTimeout(() => {
        setCount(count + Number(value));
      }, 500);
    }
  };
  return (
    <>
      <h1>当前求和为：{count}</h1>
      <select ref={selectElement} onChange={changSelectVal}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &nbsp;&nbsp;
      <button onClick={incerment}>increment</button>
      &nbsp;&nbsp;
      <button onClick={decaese}>Dncrement</button>
      &nbsp;&nbsp;
      <button onClick={incermentOfAdd}>当前求和为奇数再加</button>
      &nbsp;&nbsp;
      <button onClick={incermentAsncy}>异步加</button>
    </>
  );
}
