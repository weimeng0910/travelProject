/*
 * @Date: 2023-11-02 13:48:15
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-06 09:40:47
 * @FilePath: /travelProject/src/components/Tabs/Tabs.tsx
 * @Description: Do not edit
 */
import { HTMLAttributes, useState } from 'react';
import { TabBar, TabContent, TabBarItem } from './Tabs.module';
import { Icon } from './svgr/index';
import { nanoid } from 'nanoid';
/**
 * tabitem属性分析
 */
//我们让 TabProps 继承自 HTMLAttributes<HTMLElement>，
//那么通用的 props 例如 style / className / onClick 就可以省略掉了

interface TabProps extends HTMLAttributes<HTMLElement> {
  //Props active 属性用于区分 TabTtem组件的状态；
  active: boolean;
  name: string; //显示在tabs bar中的item名称
  //iconType 用于区分 Tab 组件使用的 Icon 类型，它会作为 type 传给 Icon 组件。
  //Parameters<typeof Icon>["0"]["type"]; 的作用是取 Icon 方法类型的第一个参数里的 type 字段
  iconType: Parameters<typeof Icon>['0']['type'];
}
//TabTtem组件
export const TabTtem = (props: TabProps) => {
  const { active, name, iconType, className, ...rest } = props;
  return (
    <TabBarItem {...rest}>
      <Icon type={iconType} className="icon" />
      {name}
    </TabBarItem>
  );
};
/**
 * tabs属性分析
 */
type TabsCallback = (val: string) => void;
interface TabsProps {
  //tsbs中item的名称
  tab: string;
  //tabs是所有tabitem中是否点击的数组
  tabs: Omit<TabProps, 'active'>[];
  //点击事件
  onChange: TabsCallback;
}

//tabs组件
function Tabs(props: TabsProps) {
  const { tab, tabs, onChange } = props;
  return (
    <TabBar>
      {tabs.map(({ name, iconType }) => {
        return (
          <TabTtem
            name={name}
            active={tab === name}
            iconType={iconType}
            onClick={() => onChange(name)}
            key={nanoid()}
          />
        );
      })}
    </TabBar>
  );
}

export function Basic() {
  const [tab, setTab] = useState('Home');

  return (
    <TabBar>
      {/* 显示的内容 */}
      {tab === 'Home' ? <TabContent>1111Home</TabContent> : null}
      {tab === 'Music' ? <TabContent>Music</TabContent> : null}
      {tab === 'Search' ? <TabContent>Search</TabContent> : null}
      {tab === 'Person' ? <TabContent>Person</TabContent> : null}
      <Tabs
        tab={tab}
        onChange={setTab}
        tabs={[
          {
            name: 'Home',
            iconType: 'Hypnotize',
          },
          {
            name: 'Music',
            iconType: 'GeoAltFill',
          },
          {
            name: 'Search',
            iconType: 'Speedometer',
          },
          {
            name: 'Person',
            iconType: 'PersonCircle',
          },
        ]}
      />
    </TabBar>
  );
}
