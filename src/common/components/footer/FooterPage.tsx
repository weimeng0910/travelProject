/*
 * @Date: 2023-09-05 11:59:56
 * @Description: FooterPage
 */
import React from 'react';
import {
  Container,
  FootercopyrightContainer,
  FooterMenuContainer,
  Heartbeat,
} from './FooterPage.module';
import { Logo } from '@/common/components/header/header.module';
import { GooglePlusOutlined, TwitterOutlined } from '@ant-design/icons';
export const FooterPage = () => {
  return (
    <Container>
      <FooterMenuContainer>
        <div>
          <Logo />
        </div>
        <div>
          <span>Terms of Use</span>
          <span>Privacy and Cookies Statement</span>
          <span>Cookie consent</span>
          <span>Site Map</span>
          <span>Contact us</span>
        </div>
        <div>
          <Heartbeat>
            <GooglePlusOutlined />
          </Heartbeat>
          <Heartbeat>F</Heartbeat>
          <Heartbeat>
            <TwitterOutlined />
          </Heartbeat>
        </div>
      </FooterMenuContainer>

      <FootercopyrightContainer>
        <h1>© 2024 Travenly All rights reserved.</h1>
      </FootercopyrightContainer>
    </Container>
  );
};
