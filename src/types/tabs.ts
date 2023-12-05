/*
 * @Date: 2023-11-13 17:11:55
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-28 10:49:17
 * @FilePath: /travelProject/src/types/tabs.ts
 * @Description: Tabs components type
 */
import React, {
  HTMLAttributes,
  ReactNode,
} from 'react';
export interface IPropsInter extends HTMLAttributes<HTMLElement> {

  defaultIndex?: number;

}

export interface ITabsContextType {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface ITabProps extends HTMLAttributes<HTMLElement> {
  isSelected?: boolean;
}
export interface ITabBarListProps {
  children: ReactNode;
}
export interface ITabPaneProps extends HTMLAttributes<HTMLElement> {
  isSelected?: boolean;
}