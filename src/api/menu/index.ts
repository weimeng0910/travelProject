/*
 * @Date: 2023-07-04 09:17:20
 * @Description: menu data request
 */
import { useHttp } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { IMenu } from '@/types/menu'

export const useMenu = () => {
  const client = useHttp();

  return useQuery<IMenu[]>(["menu"], () =>
    client("menu")
  );
};
