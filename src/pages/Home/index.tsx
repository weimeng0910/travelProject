import { FC } from 'react';
import {
  Container,
  Header,
  HeaderLeft,
  HeaderCenter,
  Links,
  HeaderRight,
  Nav,
  Main,
  Aside,
  Footer,
} from './home-css';

/**
 * @date 2023/05/30
 * @description Homepage
 */

export const Homepage: FC = () => {
  return (
    <Container>
      <Header>
        <HeaderLeft>Tarvenly</HeaderLeft>
        <HeaderCenter>
          <Links>
            <li className="li">Hotels</li>
            <li className="li">Things to do</li>
            <li className="li">Restaurants</li>
            <li className="li">Travel Stories</li>
            <li className="li">More</li>
          </Links>
        </HeaderCenter>
        <HeaderRight>
          <a href="">Register</a>
          <a href="">Login</a>
        </HeaderRight>
      </Header>
      <Nav>nav</Nav>
      <Main>main</Main>
      <Aside>Aside</Aside>
      <Footer>111</Footer>
    </Container>
  );
};
