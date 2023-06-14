import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  EditOutlined,
  BellOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

import { Container, HeaderLeft, HeaderCenter, HeaderRight, Links } from './header.module';
import { useMenu } from '@/utils/menu';
import { ReactComponent as Softwarelogo } from '@/assets/logo.svg';
/**
 * @date 2023/05/30
 * @description Header
 */

export const Header: FC = () => {
  const { data: menuList } = useMenu(); //获取菜单数据
  console.log(menuList, '001');

  return (
    <>
      <Container>
        <HeaderLeft>
          <Softwarelogo width="35px" height="36px" />
          <span>Travenly</span>
        </HeaderLeft>
        <HeaderCenter>
          <Links>
            <li className="li">
              <HomeOutlined />
            </li>
            <li className="li">
              <Link to="/home">Home</Link>
            </li>
            <li className="li">
              <HomeOutlined />
            </li>
            <li className="li">
              <Link to="detail/:touristRouteId">Detail</Link>
            </li>
            <li className="li">
              <HomeOutlined />
            </li>
            <li>
              <Link to="tickets">Tickets</Link> | {''}
            </li>
            <li className="li">
              <HomeOutlined />
            </li>
            <li className="li">
              <Link to="placeOrder">PlaceOrder</Link>
            </li>
            <li className="li">
              <HomeOutlined />
            </li>
            <li className="li">
              <Link to="shoppingCart">Cart</Link>
            </li>
          </Links>
        </HeaderCenter>
        <HeaderRight>
          <a href="">Login</a>
        </HeaderRight>
      </Container>
    </>
  );
};
