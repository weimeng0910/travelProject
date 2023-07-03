import React, { useMemo, useState } from 'react';

import type { MenuProps } from 'antd';
import { StyledMenu } from './sideMenu.module';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuItem, getItem } from './utils';
/**
 * @date 2023/05/30
 * @description SideMenu
 */

/**
 * data
 */
const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),

  getItem('Navigation Three4', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
const onClick: MenuProps['onClick'] = e => {
  console.log('click', e);
};
export const SideMenu: React.FC = () => {
  return <StyledMenu onClick={onClick} style={{ width: 350 }} mode="vertical" items={items} />;
};
