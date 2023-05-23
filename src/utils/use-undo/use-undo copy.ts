import { useState, useCallback } from 'react';

//初始值initialPresent可能是任何类型，所以这里要用泛型
export const useUndo = <T>(initialPresent: T) => {

  //定义三个状态，来保存当前，和历史以及未来的数据状态
  //past是一个数组，用来记录历史的合集
  const [past, setPast] = useState<T[]>([]);
  //当前的状态
  const [present, setPresent] = useState(initialPresent);
  //未来的状态,用来记录将来的合集
  const [future, setFuture] = useState<T[]>([]);

  //历史记录存在吗,向后退,历史记录就是past.length,
  const canUndo = past.length !== 0;
  //未来的记录，向前跳
  const canRedo = future.length !== 0;
  //定义undo的方法
  const undo = useCallback(() => {
    //如查历史纪录的数组长度为0直接返回，什么都不做
    if (!canUndo) return;
    //找到记录数组最新的那个集合，当我们undo完了以后，把最头上的那个纪录取出来
    const previous = past[past.length - 1];
    //新的记录当前历史记录,数组的方法slice复制作用，从past数组中的0下标复复制到length-1前的数组
    const newPast = past.slice(0, past.length - 1);
    //重新设置历史状态
    setPast(newPast);
    //重新设置当前状态
    setPresent(previous);
    //重新设置未来的状态
    setFuture([present, ...future]);
  }, [])
  //定义前进的方法
  const redo = useCallback(() => {
    if (!canRedo) return;
    const next = future[0];
    //['present',f1, f2,f3]这里的slice相当于从f1向后选择【f2,f3]
    const newFuture = future.slice(1);
    setPast([...past, present]);
    setPresent(next);
    setFuture(newFuture)
  }, []);
  //定义设置的方法
  const set = useCallback((newPresent: T) => {
    if (newPresent === present) {
      return
    }
    setPast([...past, present]);
    setPresent(newPresent);
    setFuture([]);
  }, []);
  //定义重置的方法
  const reset = useCallback((newPresent: T) => {
    setPast([]);
    setPresent(newPresent);
    setFuture([]);
  }, []);

  return [
    { past, present, future },
    { undo, redo, set, reset, canUndo, canRedo }
  ]
};