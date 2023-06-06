import * as initalData from './data/initial-data';
import { menuDB } from '@/config'
/**
 * 初始化数据
 * LocalStorage 本地存储兼容函数
 * getItem: 获取属性
 * setItem: 设置属性
 * 将初始化数据存入 window.localStorage
 */

const persist = (storageKey: string, data: any[]) =>
  window.localStorage.getItem(storageKey) || window.localStorage.setItem(storageKey, JSON.stringify(data));

//写入数据
export const bootstrap = () => {
  persist(menuDB, initalData.menu);
};

