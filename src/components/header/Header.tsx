import { FC } from 'react';
import { Container, HeaderLeft, HeaderCenter, HeaderRight, Links } from './header.module';
import {
  HomeOutlined,
  UserOutlined,
  EditOutlined,
  BellOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
/**
 * @date 2023/05/30
 * @description Header
 */
export const Header: FC = () => {
  return (
    <>
      <Container>
        <HeaderLeft>Tarvenly</HeaderLeft>
        <HeaderCenter>
          <Links>
            <li className="li">
              <HomeOutlined />
            </li>
            <li className="li">Home</li>
            <li className="li">
              <EditOutlined />
            </li>
            <li className="li">Review</li>
            <li className="li">
              <UserOutlined />
            </li>
            <li className="li">Trips</li>
            <li className="li">
              <UserOutlined />
            </li>
            <li className="li">Sitemap</li>
            <li className="li">
              <BellOutlined />
            </li>
            <li className="li">My Order</li>
            <li className="li">
              <ShoppingCartOutlined />
            </li>
            <li className="li">Cart</li>
          </Links>
        </HeaderCenter>
        <HeaderRight>
          <a href="">Register</a>
          <a href="">Login</a>
        </HeaderRight>
      </Container>
    </>
  );
};
