/*
 * @Date: 2023-07-04 09:17:20
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-17 15:37:26
 * @FilePath: /travelProject/src/utils/menu/index.ts
 * @Description: Do not edit
 */
import { useHttp } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { IMenu } from '@/types/menu'

/**
 * @date 2023/06/07
 * @description menu data request
 */
export const useMenu = () => {
  const client = useHttp();

  return useQuery<IMenu[]>(["menu"], () =>
    client("menu")
  );
};
