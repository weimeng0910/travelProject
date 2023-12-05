/*
 * @Date: 2023-11-02 10:39:39
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-30 12:12:36
 * @FilePath: /travelProject/src/components/VacationsBar/VacationsBar.tsx
 * @Description: VacationBar
 */
import React from 'react';
import { Container, TitleBox } from './VacationsBar.module';
export const VacationsBar: React.FC = () => {
  return (
    <Container>
      <span></span>
      <TitleBox>
        <div>The Hottest Trip</div>
        <div>
          The most popular and recommended Destination, bring family now Let's go together and enjoy
          the holiday.
        </div>
        <div>more</div>
      </TitleBox>
    </Container>
  );
};
