/*
 * @Date: 2024-01-24 13:31:12
 * @Description: Do not edit
 */
import React from 'react';
import { Container } from './style.module';
import Construction from '@/assets/images/UnderConstruction.png';
export const UnderConstruction: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Under construction</h1>
        <img src={Construction} alt="" />
      </div>
    </Container>
  );
};
