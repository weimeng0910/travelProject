/*
 * @Date: 2023-11-13 17:11:55
 * @Description: Tabs components type
 */
import React, {
  HTMLAttributes,
  ReactNode,
  PropsWithChildren,
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

export interface ITabPaneProps extends HTMLAttributes<HTMLElement> {
  isSelected?: boolean;
}