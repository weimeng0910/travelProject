import { MenuNode } from '../data/initial-data';//type

/** 
* @date 06.06.2023
* @description  load localStorage data
*/

/**
 *  @function menulist
 *  @param storageKey
 *  @description 加载查找到的任务数据
 */
/**
 *  @function loadList
 *  @param storageKey
 *  @description 加载存在 localStorage里的项目数据
 */

export const loadList = (storageKey: string) => {

  const screensData = JSON.parse(window.localStorage.getItem(storageKey)!) || []; // 非空断言运算符告诉 typescript 您知道自己在做什么

  return screensData ?? []; // ??在value1和value2之间，只有当value1为null或者 undefined 时取value2，否则取value1
};

export const menulist = async (storageKey: string) => {

  // 加载localStorage里的项目数据
  const menudata: MenuNode[] = loadList(storageKey);
  return menudata;

}
