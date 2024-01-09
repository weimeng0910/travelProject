/*
 * @Date: 2023-09-04 11:39:42
 * @Description: bannerGoods data request
 */
import { useHttp } from '@/api/http';
import { useQuery } from '@tanstack/react-query';
import { IRootObject, IGoods } from '@/types/goods';
import { cleanObject } from '@/common/hooks'
/**
 * Query Banner Product Request
 * @param query Goods string used in request
 * @returns Set of Banner Goods objects used for rendering
 */
export const useGoods = (param?: Partial<IGoods>) => {
  const client = useHttp();

  return useQuery<IRootObject>(["Goods", cleanObject(param || {})], () =>
    client("goods", { data: cleanObject(param || {}) })
  );
};

