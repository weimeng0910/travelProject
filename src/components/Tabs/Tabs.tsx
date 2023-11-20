/*
 * @Date: 2023-11-02 13:48:15
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-14 14:54:47
 * @FilePath: /travelProject/src/components/Tabs/Tabs.tsx
 * @Description: Tabs components
 */
import React, {
  useContext,
  useState,
  HTMLAttributes,
  ReactNode,
  useMemo,
  ReactElement,
} from 'react';
import { TabBar, TabContent, TabBarItem } from './Tabs.module';
import { Icon } from './svgr/index';
import {
  IPropsInter,
  ITabsContextType,
  ITabProps,
  ITabBarListProps,
  ITabPaneProps,
} from '@/types/tabs';

/**
 * tabs state context
 */
const TabsContext = React.createContext<ITabsContextType>({
  selectedIndex: 0,
  setSelectedIndex: () => {},
});
/**
 * tabs components
 */

export const Tabs = (props: IPropsInter) => {
  const { children, defaultIndex } = props;
  const [selectedIndex, setSelectedIndex] = useState(
    typeof defaultIndex === 'number' ? defaultIndex : 0
  );

  const context = useMemo(
    () => ({ selectedIndex, setSelectedIndex }),
    [selectedIndex, setSelectedIndex]
  );
  //Provide status to children
  return <TabsContext.Provider value={context}>{children}</TabsContext.Provider>;
};

/**
 * tabitem
 */
export const Tab = (props: ITabProps) => {
  const { children, onClick, isSelected } = props;

  return (
    <TabBarItem onClick={onClick} TabisSelected={isSelected!}>
      {children}
    </TabBarItem>
  );
};
/**
 * tabbarList
 */
export const TabBarList = (props: ITabBarListProps) => {
  const { children } = props;
  const context = useContext(TabsContext);

  return (
    <TabBar>
      {React.Children.map(children, (element: ReactNode, index: number) => {
        if (React.isValidElement(element)) {
          const tabElement = element as ReactElement<ITabProps>;
          return React.cloneElement(tabElement, {
            onClick: () => context.setSelectedIndex(index),
            isSelected: index === context.selectedIndex,
          });
        }
      })}
    </TabBar>
  );
};
/**
 * tabpane
 */
export const TabPane = (props: ITabPaneProps) => {
  const { children, isSelected } = props;
  if (!isSelected) return null;
  return <div>{children}</div>;
};
/**
 * tabpanels
 */
export const TabPanels = ({ children }: { children: ReactNode }) => {
  const context = useContext(TabsContext);

  return (
    <TabContent>
      {React.Children.map(children, (element: ReactNode, index: number) => {
        if (React.isValidElement(element)) {
          const tabElement = element as ReactElement<ITabPaneProps>;
          return React.cloneElement(tabElement, {
            isSelected: index === context.selectedIndex,
          });
        }
      })}
    </TabContent>
  );
};
