/*
 * @Date: 2023-12-14 14:00:54
 * @Description: This hook set search param
 */
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';
import { useMemo, useState } from 'react';

import { cleanObject, subset } from '../cleanObject';

export const useSetUrlSearchParam = () => {


  const [searchParams, setSearchParam] = useSearchParams();

  return (params: { [key in string]: unknown }) => {
    const o = cleanObject({
      ...Object.fromEntries(searchParams),
      ...params,
    }) as URLSearchParamsInit;
    return setSearchParam(o);
  };
};

/**
 * useUrlQueryParam return url and set url
 */

export const useUrlQueryParam = <K extends string>(keys: K[]) => {

  const [searchParams] = useSearchParams();

  const setSearchParams = useSetUrlSearchParam();

  const [stateKeys] = useState(keys);

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


