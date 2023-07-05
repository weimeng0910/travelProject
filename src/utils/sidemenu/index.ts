import { useHttp } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { SideMenu } from '@/types/sideMenu'

/**
 * @date 2023/06/07
 * @description menu data request
 */
export const useSideMenu = () => {
  const client = useHttp();

  return useQuery<SideMenu[]>(["sideMenu"], () =>
    client("sideMenu")
  );
};

