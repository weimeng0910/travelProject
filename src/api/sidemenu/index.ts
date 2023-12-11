/*
 * @Date: 2023-07-04 11:19:54
 * @Description: menu data request
 */

import { useHttp } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { ISideMenu } from '@/types/sideMenu'

export const useSideMenu = () => {
  const client = useHttp();

  return useQuery<ISideMenu[]>(["sideMenu"], () =>
    client("sideMenu")
  );
};

