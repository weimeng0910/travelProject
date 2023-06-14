import { FC } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import {
  HomeOutlined,
  UserOutlined,
  EditOutlined,
  BellOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

import { Container, HeaderLeft, HeaderCenter, HeaderRight, Links } from './header.module';
import { useMenu } from '@/utils/menu'; //data
import { ReactComponent as Softwarelogo } from '@/assets/logo.svg';
/**
 * @date 2023/05/30
 * @description Header
 */

//创建图标列表数据
const iconList = {
  '/home': <HomeOutlined />,
  '/detail': <UserOutlined />,
  '/tickets': <EditOutlined />,
  '/placeOrder': <BellOutlined />,
  '/shoppingCart': <ShoppingCartOutlined />,
  '/favoritet': <ShoppingCartOutlined />,
};
//Header
export const Header: FC = () => {
  const { data: menuList } = useMenu(); //获取菜单数据
  return (
    <>
      <Container>
        <HeaderLeft>
          <Softwarelogo width="35px" height="36px" />
          <span>Travenly</span>
        </HeaderLeft>
        <HeaderCenter>
          <Links>
            {menuList?.map(item => (
              <li className="li" key={nanoid()}>
                {iconList[item.key]}
                <Link to={item.key}>{item.label}</Link>
              </li>
            ))}
          </Links>
        </HeaderCenter>
        <HeaderRight>
          <a href="">Login</a>
        </HeaderRight>
      </Container>
    </>
  );
};
