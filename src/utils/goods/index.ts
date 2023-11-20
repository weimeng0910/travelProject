/*
 * @Date: 2023-09-04 11:39:42
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-17 15:38:04
 * @FilePath: /travelProject/src/utils/goods/index.ts
 * @Description: Do not edit
 */
import { useHttp } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { IRootObject } from '@/types/goods';

/**
 * @date 2023/08/31
 * @description bannerGoods data request
 */

export const useGoods = () => {
  const client = useHttp();

  return useQuery<IRootObject>(["Goods"], () =>
    client("goods")
  );
};

