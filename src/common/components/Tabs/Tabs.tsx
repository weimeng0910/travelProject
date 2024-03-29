/*
 * @Date: 2023-11-02 13:48:15
 * @Description: Tabs components
 */
import {
  Children,
  isValidElement,
  cloneElement,
  useContext,
  useState,
  createContext,
  ReactNode,
  useMemo,
  ReactElement,
} from 'react';
import { TabBar, TabContent, TabBarItem } from './Tabs.module';

import { IPropsInter, ITabsContextType, ITabProps, ITabPaneProps } from '@/types/tabs';

/**
 * tabs state context
 */
const TabsContext = createContext<ITabsContextType>({
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
  return (
    <div data-testid="test-tabs">
      <TabsContext.Provider value={context}>{children}</TabsContext.Provider>
    </div>
  );
};

/**
 * tabitem
 */
export const Tab = (props: ITabProps) => {
  const { children, onClick, isSelected } = props;

  return (
    <TabBarItem onClick={onClick} TabisSelected={isSelected!} data-testid="test-tabitem">
      {children}
    </TabBarItem>
  );
};
/**
 * tabbarList
 */
export const TabBarList = (props: React.PropsWithChildren) => {
  const { children } = props;
  const context = useContext(TabsContext);

  return (
    <TabBar data-testid="test-tabbar">
      {Children.map(children, (element: ReactNode, index: number) => {
        if (isValidElement(element)) {
          const tabElement = element as ReactElement<ITabProps>;
          return cloneElement(tabElement, {
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
    <TabContent data-testid="test-tabpanels">
      {Children.map(children, (element: ReactNode, index: number) => {
        if (isValidElement(element)) {
          const tabElement = element as ReactElement<ITabPaneProps>;
          return cloneElement(tabElement, {
            isSelected: index === context.selectedIndex,
          });
        }
      })}
    </TabContent>
  );
};
