/*
 * @Date: 2023-09-04 11:39:42
 * @Description: bannerGoods data request
 */
import { useHttp } from '@/api/http';
import { useQuery } from '@tanstack/react-query';
import { IRootObject } from '@/types/goods';

/**
 * Query Banner Product Request
 * @param query Goods string used in request
 * @returns Set of Banner Goods objects used for rendering
 */
export const useGoods = () => {
  const client = useHttp();

  return useQuery<IRootObject>(["Goods"], () =>
    client("goods")
  );
};

