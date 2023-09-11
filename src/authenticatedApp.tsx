import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout, Main, Aside, Footer } from '@/styles/authenticatedApp.module';
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
type VisibleProps = {
  visible: boolean;
};
export const AuthenticatedAPP: React.FC<VisibleProps> = (props: VisibleProps) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(visible => !visible);
    console.log(visible, '001');
  };

  return (
    <Layout>
      <Router>
        <Header visible={visible} handleClick={handleClick} />
        <Main visible={visible}>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/placeOrder" element={<PlaceOrderPage />} />
            <Route path="/shoppingCart" element={<ShoppinCart />} />
            <Route path="/favorite" element={<Favoritet />} />
            {/* 重定向到首页*/}
            <Route path="/" element={<Navigate to="home" />} />
          </Routes>
        </Main>
        <Aside>Aside</Aside>
        <Footer>Trending in Travel Summer</Footer>
      </Router>
    </Layout>
  );
};
