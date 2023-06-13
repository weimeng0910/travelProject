import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, Nav, Main, Aside, Footer } from '@/styles/authenticatedApp';
import { Header } from '@/components/header';
import {
  HomePage,
  DetailPage,
  PlaceOrderPage,
  Tickets,
  ShoppinCart,
  SearchPage,
  Favoritet,
} from '@/pages';
/**
 * @date 2023/06/12
 * @description AuthenticatedAPP react router
 */
export const AuthenticatedAPP: React.FC = () => (
  <Container>
    <Header />
    <Main>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:touristRouteId" element={<DetailPage />} />
          <Route path="/search/:keywords" element={<SearchPage />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/placeOrder" element={<PlaceOrderPage />} />
          <Route path="/shoppingCart" element={<ShoppinCart />} />
          <Route path="/favoritet" element={<Favoritet />} />
          {/* 重定向到首页*/}
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </Main>
    <Aside>Aside</Aside>
    <Footer>Trending in Travel Summer</Footer>
  </Container>
);
