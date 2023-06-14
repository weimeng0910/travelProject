import { useHttp } from '@/utils/http';
import { useQuery } from '@tanstack/react-query';
import { Menu } from '@/types/menu'

/**
 * @date 2023/06/07
 * @description menu data request
 */
export const useMenu = () => {
  const client = useHttp();

  return useQuery<Menu[]>(["menu"], () =>
    client("menu")
  );
};
