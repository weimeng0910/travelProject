/*
 * @Date: 2023-12-14 14:00:54
 * @Description: This hook set search param
 */
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';
import { useMemo, useState } from 'react';

import { cleanObject, subset } from '../cleanObject';

/**
 * 该挂钩返回一个允许您设置 URL 搜索参数的函数。
 * 它使用useSearchParams挂钩 fromreact-router-dom来获取和设置搜索参数。
 * 
 */
export const useSetUrlSearchParam = () => {

  //useSearchParams用于获取当前URL搜索参数
  const [searchParams, setSearchParam] = useSearchParams();
  //返回的函数采用键值对 ( params) 的对象，并使用新值更新 URL 中的搜索参数。
  //它使用cleanObject实用程序函数删除任何未定义或空值。
  return (params: { [key in string]: unknown }) => {
    const updatedSearchParams = cleanObject({
      ...Object.fromEntries(searchParams),
      ...params,
    }) as URLSearchParamsInit;
    // Log the updated search parameters
    console.log('Updated search parameters:', updatedSearchParams);
    return setSearchParam(updatedSearchParams);
  };
};

/**
 * useUrlQueryParam return url and set url
 * 该钩子接受一个键数组并返回一个包含当前 URL 查询参数（按指定键过滤）的数组
 * 以及一个用于设置 URL 查询参数的函数。
 */

export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  //useSearchParams用于获取当前URL搜索参数。
  const [searchParams] = useSearchParams();
  //useSetUrlSearchParam用于获取设置 URL 搜索参数的函数。
  const setSearchParams = useSetUrlSearchParam();
  //stateKeys是一个状态变量，保存传递给钩子的键useUrlQueryParam。
  const [stateKeys] = useState(keys);
  //返回数组的第一个元素是一个记忆对象，其中包含按指定键过滤的当前 URL 查询参数。
  //第二个元素是一个函数，允许您通过提供具有更新值的部分对象来设置 URL 查询参数。
  return [
    useMemo(
      () =>
        subset(Object.fromEntries(searchParams), stateKeys) as {
          [key in K]: string;
        },
      [searchParams, stateKeys]
    ),
    (params: Partial<{ [key in K]: unknown }>) => setSearchParams(params),
  ] as const;

};


