/*
 * @Date: 2023-12-14 16:23:35
 * @Description: Do not edit
 */
///*
// * @Date: 2023-12-14 16:23:35
// * @Description: util
// */
//import { useLocation } from 'react-router';
//import { useGoods } from '@/api/goods';

////Get the id in the url
//export const useProjectIdInUrl = () => {
//  const { pathname } = useLocation();//这个钩子返回当前location历史对象
//  const id = pathname.match(/detail\/(\d+)/)?.[1];//用正则表达式取出id
//  return Number(id);
//};
////Get the productDetail in the id
//export const useProjectInUrl = () => useGoods(useProjectIdInUrl());