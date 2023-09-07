import { GoodsData } from '../types';
import { loadList } from '../utils';

/**
 *  @function GoodsDB
 *  @param storageKey
 *  @description 加载查找到的任务数据
 *  @date 31.08.2023
 */

export const goodsDB = async (storageKey: string) => {

  // 加载localStorage里的项目数据
  const goodsDB: Partial<GoodsData>[] = loadList(storageKey);
  return goodsDB;

}
