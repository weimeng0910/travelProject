import React, { useMemo, useState } from 'react';
import type { MenuProps } from 'antd';
import { MoreOutlined, MailOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { StyledMenu } from './sideMenu.module';
import { useSideMenu } from '@/utils';
import { MenuItem, getItem } from './utils';
import { getKey } from '@/utils';
import { SideMenuType } from '@/types/sideMenu';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
/**
 * @date 2023/05/30
 * @description SideMenu
 */
//创建图标列表数据
const iconList = {
  '/home': <MailOutlined />,
  '/user-manage': <MailOutlined />,
  '/user-manage/list': <VideoCameraOutlined />,
  '/right-manage': <UploadOutlined />,
  '/right-manage/role/list': <UploadOutlined />,
  '/right-manage/right/list': <UploadOutlined />,
  '/news-manage': <UploadOutlined />,
  '/news-manage/add': <UploadOutlined />,
  '/news-manage/draft': <UploadOutlined />,
  '/news-manage/category': <UploadOutlined />,
  '/audit-manage': <UploadOutlined />,
  '/audit-manage/audit': <UploadOutlined />,
  '/audit-manage/list': <UploadOutlined />,
  '/publish-manage': <UploadOutlined />,
  '/publish-manage/unpublished': <UploadOutlined />,
  '/publish-manage/published': <UploadOutlined />,
  '/publish-manage/sunset': <UploadOutlined />,
};
const items: MenuItem[] = [];
const onClick: MenuProps['onClick'] = e => {
  console.log('click', e);
};
//生成menu
const createMenu = (list: SideMenuType[]) => {
  const newItems: ItemType[] = [];
  list?.forEach((item: SideMenuType) => {
    //多级目录
    if (!item.hidden) {
      newItems.push(
        getItem(
          <span>{item.title}</span>,
          `side-menu${getKey()}`,
          <MoreOutlined />,
          //递归
          item.children && createMenu(item.children)
        )
      );
    } else {
      //单级目录
      newItems.push(
        getItem(<span>{item.title}</span>, `side-menu${getKey()}`, <MoreOutlined />, [])
      );
    }
  });
  return newItems;
};

export const SideMenu: React.FC = () => {
  const { isLoading, error, data: list } = useSideMenu();
  console.log(list);
  const items: MenuItem[] = createMenu(list as SideMenuType[]);
  return <StyledMenu onClick={onClick} style={{ width: 240 }} mode="vertical" items={items} />;
};
