//import { FC, useState } from 'react';
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
  LogoBox,
  Logo,
} from './header.module';
import { useMenu } from '@/utils'; //data
//import { ReactComponent as Softwarelogo } from '@/assets/logo.svg';

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
  '/home': <HomeTwoTone twoToneColor="#27ae60" rev={undefined} />,
  '/detail': <GiftTwoTone twoToneColor="#27ae60" rev={undefined} />,
  '/tickets': <PropertySafetyTwoTone twoToneColor="#27ae60" rev={undefined} />,
  '/placeOrder': <BellTwoTone twoToneColor="#27ae60" rev={undefined} />,
  '/shoppingCart': <ShoppingTwoTone twoToneColor="#27ae60" rev={undefined} />,
  '/favorite': <HeartTwoTone twoToneColor="#f41f07" rev={undefined} />,
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
          <UserOutlined style={{ paddingRight: '0.625rem' }} rev={undefined} />
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
        <Navbar gridTemplateColumns={'20vw auto 20vw'}>
          <HeaderLeft>
            <Logo onClick={resetRoute} />
            <LogoBox onClick={resetRoute}>Travenly</LogoBox>
          </HeaderLeft>
          {/* 折叠 */}
          <MenuButton onClick={handleClick}>
            <MenuOutlined rev={undefined} />
          </MenuButton>

          <HeaderCenter visible={visible}>
            <Links>
              {menuList?.map(item => (
                <Link key={item.id} to={item.key}>
                  <Li key={nanoid()}>
                    <SpanIcon>{iconList[item.key]}</SpanIcon>
                    {item.label}
                  </Li>
                </Link>
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
