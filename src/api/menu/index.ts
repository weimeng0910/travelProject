/*
 * @Date: 2023-07-04 09:17:20
 * @Description: menu data request
 */
import { useHttp } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { IMenu } from '@/types/menu'

/**
 * Query Banner Product Request
 * @param query menu string used in request
 * @returns Set of Hand Menu objects used for rendering
 */
export const useMenu = () => {
  const client = useHttp();

  return useQuery<IMenu[]>(["menu"], () =>
    client("menu")
  );
};
