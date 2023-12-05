
import { useHttp } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { ISideMenu } from '@/types/sideMenu'

/**
 * @date 2023/06/07
 * @description menu data request
 */
export const useSideMenu = () => {
  const client = useHttp();

  return useQuery<ISideMenu[]>(["sideMenu"], () =>
    client("sideMenu")
  );
};

