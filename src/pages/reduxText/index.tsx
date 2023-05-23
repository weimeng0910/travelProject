import React, { useReducer, useRef } from 'react';

const INCERMENT = 'incerment';
const DECREMENT = 'decrement';

//定义类型
type InitState = {
  count: number;
  //selectNumber: number;
};
type Action = {
  type: typeof INCERMENT | typeof DECREMENT;
  payload: number;
};
//初始状态
const initialState = { count: 0 };

//reducer是一个纯函数，不可以使用异步，这里的state是此时此刻现在的state值
const reducer = (state: InitState, action: Action) => {
  const { count } = state;
  const { type, payload } = action;
  switch (type) {
    case INCERMENT: {
      return { count: count + payload };
    }
    case DECREMENT: {
      return { count: count - payload };
    }
  }
};

export default function ReduxText() {
  //usereducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectElement = useRef<HTMLSelectElement>(null);

  //返回需要改变的值
  const changSelectVal = () => {
    //类型保护
    if (selectElement.current != null) {
      const { value } = selectElement.current;
      const payloadvalue = Number(value);
      return payloadvalue;
    }
  };
  //加法
  const incerment = () => dispatch({ type: INCERMENT, payload: changSelectVal() as number });

  //减法
  const decrement = () => dispatch({ type: DECREMENT, payload: changSelectVal() as number });
  //奇数加
  const incermentOfAdd = () => {
    if (state.count % 2 != 0) {
      return dispatch({ type: INCERMENT, payload: changSelectVal() as number });
    }
  };
  //异步加,// 异步action
  const incermentAsncy = () => {
    setTimeout(() => {
      return dispatch({ type: INCERMENT, payload: changSelectVal() as number });
    }, 500);
  };
  return (
    <>
      <h1>
        当前求和为：<> {state.count}</>
      </h1>
      <select ref={selectElement} onChange={changSelectVal}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &nbsp;&nbsp;
      <button onClick={incerment}>increment</button>
      &nbsp;&nbsp;
      <button onClick={decrement}>Dncrement</button>
      &nbsp;&nbsp;
      <button onClick={incermentOfAdd}>当前求和为奇数再加</button>
      &nbsp;&nbsp;
      <button onClick={incermentAsncy}>异步加</button>
    </>
  );
}
