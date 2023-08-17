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
  MenuOutlined,
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
  LogoFont,
} from './header.module';
import { useMenu } from '@/utils'; //data
import { ReactComponent as Softwarelogo } from '@/assets/logo.svg';
import { ButtonNoPadding, Row } from '@/components/lib/lib';
//导入logo跳转回根路由的方法
import { resetRoute } from '@/utils';
/**
 * @date 2023/05/30
 * @description Header
 */
//定义类型
interface VisibleProps {
  //通过utiltype和list组件中的类型保持一致
  visible: boolean;

  handleClick: () => void;
}
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
export const Header = ({ visible, handleClick }: VisibleProps) => {
  const { data: menuList } = useMenu(); //获取菜单数据

  return (
    <>
      <Container>
        <Navbar>
          <HeaderLeft>
            <ButtonNoPadding type="link" onClick={resetRoute}>
              <Row>
                <Softwarelogo width="2.5rem" height="2.5rem" />
                <LogoFont>Travenly</LogoFont>
              </Row>
            </ButtonNoPadding>
          </HeaderLeft>
          {/* 折叠 */}
          <MenuButton onClick={handleClick}>
            <MenuOutlined style={{ fontSize: '22px' }} />
          </MenuButton>

          <HeaderCenter visible={visible}>
            <Links>
              {menuList?.map(item => (
                <Li key={nanoid()}>
                  <SpanIcon>{iconList[item.key]}</SpanIcon>
                  <Link to={item.key}>{item.label}</Link>
                </Li>
              ))}
            </Links>
          </HeaderCenter>
          <HeaderRight visible={visible}>
            <User />
          </HeaderRight>
        </Navbar>
      </Container>
    </>
  );
};
