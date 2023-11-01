import React from 'react';

import type { MenuProps } from "antd";
/**
 * @date 2023/07/03
 * @description getItem
 */
//Required<T> 的作用就是将某个类型里的属性全部变为必选项。
export type MenuItem = Required<MenuProps>['items'][number];
/**
 * antd下拉菜单子项定义
 * @param  label: React.ReactNode
 * @param  key:  React.Key
 * @param  icon: React.ReactNode
 * @param  children?: MenuItem[]
 * @param  type?: 'group'
 */
export const getItem = (
  label: React.ReactNode,
  key: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};
