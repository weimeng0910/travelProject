/*
 * @Date: 2023-07-04 09:17:20
 * @Description: menu data request
 */
import { useHttp, } from '@/api';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { IMenu } from '@/types/menu';

export const useMenu = (): UseQueryResult<IMenu[]> => {
  const client = useHttp();

  return useQuery<IMenu[]>(["menu"], () =>
    client("menu")
  );
};
