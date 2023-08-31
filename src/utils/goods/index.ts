import { useHttp } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { Goods } from '@/types/goods'

/**
 * @date 2023/08/31
 * @description bannerGoods data request
 */

export const useBannerGoods = () => {
  const client = useHttp();

  return useQuery<Partial<Goods>[]>(["bannerGoods"], () =>
    client("banner")
  );
};

