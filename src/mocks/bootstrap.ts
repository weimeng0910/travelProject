import * as initalData from './data/initialData';
import { menuDB, sideMenuDB, GoodsDB } from '@/config'
import { ISideMenu, IMenuNode, IRootObject } from './types'
/**
 * 初始化数据
 * LocalStorage 本地存储兼容函数
 * getItem: 获取属性
 * setItem: 设置属性
 * 将初始化数据存入 window.localStorage
 */


const persist = (storageKey: string, data: (IMenuNode[] | ISideMenu[]) | IRootObject) =>
  window.localStorage.getItem(storageKey) || window.localStorage.setItem(storageKey, JSON.stringify(data));

//写入数据
export const bootstrap = () => {
  persist(menuDB, initalData.menu as IMenuNode[]);
  persist(sideMenuDB, initalData.sideMenuList as ISideMenu[]);
  persist(GoodsDB, initalData.goodsData);
};

