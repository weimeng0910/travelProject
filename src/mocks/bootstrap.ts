import * as initalData from './data/initialData';
import { menuDB, sideMenuDB, GoodsDB } from '@/config'
import { SideMenu, MenuNode, RootObject } from './types'
/**
 * 初始化数据
 * LocalStorage 本地存储兼容函数
 * getItem: 获取属性
 * setItem: 设置属性
 * 将初始化数据存入 window.localStorage
 */
//interface Data {
//  errno: 0;
//  data: {
//    barner: Banner[];
//    newGoods: NewGoods[];
//    coupon: Coupon[];
//    channel: Channel[];
//    groupon: Groupon[];
//    brand: Brand[];
//    hotGoods: HotGoods[];
//    topic: Topic[];
//  }
//  errmsg: string;
//}

const persist = (storageKey: string, data: (MenuNode[] | SideMenu[]) | RootObject) =>
  window.localStorage.getItem(storageKey) || window.localStorage.setItem(storageKey, JSON.stringify(data));
const persist2 = (storageKey: string, data: any) =>
  window.localStorage.getItem(storageKey) || window.localStorage.setItem(storageKey, JSON.stringify(data));
//写入数据
export const bootstrap = () => {
  persist(menuDB, initalData.menu as MenuNode[]);
  persist(sideMenuDB, initalData.sideMenuList as SideMenu[]);
  persist(GoodsDB, initalData.goodsData);
};

