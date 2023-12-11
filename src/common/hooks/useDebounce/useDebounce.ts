/*
 * @Date: 2022-11-28 10:22:21
 * @Description: useDebounce
 */

import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay?: number): T => {
  //定义一个内部的变量用来更新value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    //每次在value值变化时都会设置一个新的定时器
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);
    //每次在上一个useEffect处理完以后再运行，清理上次定时器的任务
    return () =>
      clearTimeout(timeout);

  }, [value, delay]);

  return debouncedValue;
};

