import { type } from 'os';
import { useState, useCallback } from 'react';

//初始值initialPresent可能是任何类型，所以这里要用泛型
export const useUndo = <T>(initialPresent: T) => {

  //定义三个状态，来保存当前，和历史以及未来的数据状态
  //past是一个数组，用来记录历史的合集
  //const [past, setPast] = useState<T[]>([]);
  //当前的状态
  //const [present, setPresent] = useState(initialPresent);
  ////未来的状态,用来记录将来的合集
  //const [future, setFuture] = useState<T[]>([]);
  //因为用useCallback时要依赖很多变量，所以把上面三个状态合并成一个
  type InitState = {
    past: T[],
    present: T,
    future: T[]
  }
  const [state, setState] = useState<InitState>({
    past: [],
    present: initialPresent,
    future: []
  })
  //历史记录存在吗,向后退,历史记录就是past.length,
  const canUndo = state.past.length !== 0;
  //未来的记录，向前跳
  const canRedo = state.future.length !== 0;
  //定义undo的方法
  const undo = useCallback(() => {
    //currentState就是现在state的值
    setState((currentState) => {
      //解构当前state的值
      const { past, present, future } = currentState;

      if (past.length === 0) return currentState;

      const previous = past[past.length - 1];

      const newPast = past.slice(0, past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [present, ...future]
      }
    })
  }, [])
  //定义前进的方法
  const redo = useCallback(() => {
    setState((currentState) => {
      const { past, present, future } = currentState;
      if (future.length === 0) return currentState;
      const next = future[0];
      const newFuture = future.slice(1);
      return {
        past: [...past, present],
        present: next,
        future: newFuture
      }
    })
  }, []);
  //定义设置的方法
  const set = useCallback((newPresent: T) => {
    setState((currentState) => {
      const { past, present, future } = currentState;
      if (newPresent === present) {
        return currentState
      }
      return {
        past: [...past, present],
        present: newPresent,
        future: []
      }
    })


  }, []);
  //定义重置的方法
  const reset = useCallback((newPresent: T) => {
    setState((currentState) => {

      return {
        past: [],
        present: newPresent,
        future: []
      }
    })
  }, []);

  return [
    state,
    { undo, redo, set, reset, canUndo, canRedo }
  ] as const;
};