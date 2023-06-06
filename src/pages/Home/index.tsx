import { FC } from 'react';
import { Container, Nav, Main, Aside, Footer } from './home-style';
import { Header } from '@/components/header';
/**
 * @date 2023/05/30
 * @description Homepage
 */

export const Homepage: FC = () => {
  return (
    <Container>
      <Header />
      <Nav>nav</Nav>
      <Main>main</Main>
      <Aside>Aside</Aside>
      <Footer>Trending in Travel Summer</Footer>
    </Container>
  );
};
