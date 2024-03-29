/*
 * @Date: 2023-09-11 11:09:24
 * @Description: Do not edit
 */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout, HeaderBox, Main, Footer } from '@/styles/authenticatedApp.module';
import { Header } from '@/common/components/header';
import { FooterPage } from '@/common/components/footer';
import {
  HomePage,
  DetailPage,
  DetailListScreen,
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
type VisibleProps = {
  visible: boolean;
};
export const AuthenticatedAPP: React.FC<VisibleProps> = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible((visible) => !visible);
    console.log(visible, '001');
  };

  return (
    <Layout>
      <Router>
        <HeaderBox>
          <Header visible={visible} handleClick={handleClick} />
        </HeaderBox>
        <Main visible={visible}>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/detail" element={<DetailListScreen />} />
            <Route path="/detail/:touristRouteId/*" element={<DetailPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/placeOrder" element={<PlaceOrderPage />} />
            <Route path="/shoppingCart" element={<ShoppinCart />} />
            <Route path="/favorite" element={<Favoritet />} />
            {/* 重定向到首页*/}
            <Route path="/" element={<Navigate to="home" />} />
          </Routes>
        </Main>
        <Footer>
          <FooterPage />
        </Footer>
      </Router>
    </Layout>
  );
};
