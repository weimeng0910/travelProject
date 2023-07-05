import { SideMenu } from '../types';
import { loadList } from '../utils';
/**
 *  @function menulist
 *  @param storageKey
 *  @description 加载查找到的任务数据
 */
export const sideMenulist = async (storageKey: string) => {

  // 加载localStorage里的项目数据
  const sideMenudata: SideMenu[] = loadList(storageKey);
  return sideMenudata;

}
