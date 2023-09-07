import { useHttp } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { RootObject } from '@/types/goods';

/**
 * @date 2023/08/31
 * @description bannerGoods data request
 */

export const useGoods = () => {
  const client = useHttp();

  return useQuery<RootObject>(["Goods"], () =>
    client("goods")
  );
};

