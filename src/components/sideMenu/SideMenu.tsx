/*
 * @Date: 2023-08-28 17:17:48
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-13 19:41:26
 * @FilePath: /travelProject/src/components/sideMenu/SideMenu.tsx
 * @Description: Do not edit
 */
import React from 'react';
import type { MenuProps } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { StyledMenu } from './sideMenu.module';
import { useSideMenu } from '@/utils';
import { MenuItem, getItem } from './utils';
import { getKey } from '@/utils';
import { ISideMenu } from '@/types/sideMenu';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
/**
 * @date 2023/05/30
 * @description SideMenu
 */

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};
//生成menu
const createMenu = (list: ISideMenu[]) => {
  const newItems: ItemType[] = [];
  list?.forEach((item: ISideMenu) => {
    //多级目录
    if (!item.hidden) {
      newItems.push(
        getItem(
          <span>{item.title}</span>,
          `side-menu${getKey()}`,
          <MoreOutlined rev={undefined} />,
          //递归
          item.children && createMenu(item.children)
        )
      );
    } else {
      //单级目录
      newItems.push(
        getItem(
          <span>{item.title}</span>,
          `side-menu${getKey()}`,
          <MoreOutlined rev={undefined} />,
          []
        )
      );
    }
  });
  return newItems;
};

export const SideMenu: React.FC = () => {
  const { data: list } = useSideMenu();
  //console.log(list);
  const items: MenuItem[] = createMenu(list as ISideMenu[]);
  return <StyledMenu onClick={onClick} style={{ width: '19vw' }} mode="vertical" items={items} />;
};
