import { MenuNode } from '../types';
import { loadList } from '../utils';

/**
 *  @function menulist
 *  @param storageKey
 *  @description 加载查找到的任务数据
 */
export const menulist = async (storageKey: string) => {

  // 加载localStorage里的项目数据
  const menuData: MenuNode[] = loadList(storageKey);
  return menuData;

}
