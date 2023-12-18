/*
 * @Date: 2023-07-04 10:32:28
 * @Description: menulist
 */
import { IMenuNode } from '../types';
import { loadList } from '../utils';


export const menulist = async (storageKey: string) => {

  // 加载localStorage里的项目数据
  const menuData: IMenuNode[] = loadList(storageKey);
  return menuData;

}
