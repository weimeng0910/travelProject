import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import {
  HomeTwoTone,
  GiftTwoTone,
  PropertySafetyTwoTone,
  BellTwoTone,
  ShoppingTwoTone,
  HeartTwoTone,
  UserOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import type { MenuProps } from 'antd';

import {
  Container,
  Navbar,
  HeaderLeft,
  HeaderCenter,
  HeaderRight,
  Links,
  SpanIcon,
  Li,
  UserRegister,
  MenuButton,
} from './header.module';
import { useMenu } from '@/utils/menu'; //data
import { ReactComponent as Softwarelogo } from '@/assets/logo.svg';
/**
 * @date 2023/05/30
 * @description Header
 */

//创建图标列表数据
const iconList = {
  '/home': <HomeTwoTone twoToneColor="#27ae60" />,
  '/detail': <GiftTwoTone twoToneColor="#27ae60" />,
  '/tickets': <PropertySafetyTwoTone twoToneColor="#27ae60" />,
  '/placeOrder': <BellTwoTone twoToneColor="#27ae60" />,
  '/shoppingCart': <ShoppingTwoTone twoToneColor="#27ae60" />,
  '/favorite': <HeartTwoTone twoToneColor="#f41f07" />,
};
//Antd的menu下拉
const menuItems: MenuProps['items'] = [
  {
    key: '1',
    label: 'sign in',
  },
  {
    key: '2',
    label: 'Register',
  },
  {
    label: 'sub menu',
    key: 'submenu',
    children: [{ label: 'item 3', key: 'submenu-item-1' }],
  },
];

//抽离User组件
const User = () => {
  return (
    <Dropdown overlay={<Menu items={menuItems} />}>
      <UserRegister>
        <span>
          <UserOutlined style={{ paddingRight: '10px' }} />
        </span>
        My travel
      </UserRegister>
    </Dropdown>
  );
};

//Header
export const Header: FC = () => {
  const { data: menuList } = useMenu(); //获取菜单数据
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(visible => !visible);
    console.log(visible, '001');
  };
  return (
    <>
      <Container>
        <Navbar>
          <HeaderLeft>
            <Softwarelogo width="35px" height="36px" />
            <span>Travenly</span>
          </HeaderLeft>

          <MenuButton onClick={handleClick}>
            <ProfileOutlined />
          </MenuButton>
          <HeaderCenter visible={visible || false}>
            <Links>
              {menuList?.map(item => (
                <Li key={nanoid()}>
                  <SpanIcon>{iconList[item.key]}</SpanIcon>
                  <Link to={item.key}>{item.label}</Link>
                </Li>
              ))}
            </Links>
          </HeaderCenter>
          <HeaderRight visible={visible || false}>
            <User />
          </HeaderRight>
        </Navbar>
      </Container>
    </>
  );
};
