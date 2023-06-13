import { useHttp } from '@/utils/http';
import { useQuery } from '@tanstack/react-query';
import { Menu } from '@/types/menu'
import { cleanObject } from '@/utils/cleanObject';
/**
 * @date 2023/06/07
 * @description menu data request
 */
export const useMenu = (param?: Partial<Menu>) => {
  const client = useHttp();

  return useQuery<Menu[]>(["menu", cleanObject(param!)], () =>
    client("menu", { data: param })
  );
};
