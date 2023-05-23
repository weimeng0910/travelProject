import { useCallback, useReducer } from 'react';

//因为用useCallback时要依赖很多变量，所以把上面三个状态合并成一个
type InitState<T> = {
  past: T[],
  present: T,
  future: T[]
}
const UNDO = 'UNDO';
const REDO = 'REDO';
const SET = 'SET';
const RESET = 'RESET';

type Action<T> = { newPresent?: T, type: typeof UNDO | typeof REDO | typeof SET | typeof RESET }

//reducer
const undoReducer = <T>(state: InitState<T>, action: Action<T>) => {

  const { past, present, future } = state;

  const { type, newPresent } = action;

  switch (type) {
    case UNDO: {

      if (past.length === 0) return state;

      const previous = past[past.length - 1];

      const newPast = past.slice(0, past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [present, ...future]
      }
    }
    case REDO: {
      if (future.length === 0) return state;
      const next = future[0];
      const newFuture = future.slice(1);
      return {
        past: [...past, present],
        present: next,
        future: newFuture
      }
    }
    case SET: {
      if (newPresent === present) {
        return state
      }
      return {
        past: [...past, present],
        present: newPresent,
        future: []
      }
    }
    case RESET: {
      return {
        past: [],
        present: newPresent,
        future: []
      }
    }

  }


}
//初始值initialPresent可能是任何类型，所以这里要用泛型
export const useUndo = <T>(initialPresent: T) => {

  const [state, dispatch] = useReducer(undoReducer, {
    past: [],
    present: initialPresent,
    future: []
  } as InitState<T>)

  //历史记录存在吗,向后退,历史记录就是past.length,
  const canUndo = state.past.length !== 0;
  //未来的记录，向前跳
  const canRedo = state.future.length !== 0;
  //定义undo的方法
  const undo = useCallback(() => dispatch({ type: UNDO }), [])
  //定义前进的方法
  const redo = useCallback(() => dispatch({ type: REDO }), []);
  //定义设置的方法
  const set = useCallback((newPresent: T) => dispatch({ type: SET, newPresent }), []);
  //定义重置的方法
  const reset = useCallback((newPresent: T) => dispatch({ type: RESET, newPresent }), []);

  return [
    state,
    { undo, redo, set, reset, canUndo, canRedo }
  ] as const;
};