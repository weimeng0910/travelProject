/*
 * @Date: 2023-06-13 11:07:56
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-16 19:12:04
 * @FilePath: /travelProject/src/components/serchPanel/SearchPanel.tsx
 * @Description: SearchPanel
 */
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import {
  NewInput,
  Container,
  PrimaryButton,
  WelcomeText,
  WorldText,
  SearchInputBox,
} from './SearchPanel.module';
/**
 * SearchPanel
 */
export const SearchPanel: React.FC = () => {
  return (
    <>
      <WelcomeText>Travel Around The</WelcomeText>
      <Container>
        <WorldText>World</WorldText>
        <SearchInputBox>
          <NewInput
            prefix={<SearchOutlined rev={undefined} />}
            placeholder="Search Destination"
            allowClear
            bordered
          />
          <PrimaryButton>Search</PrimaryButton>
        </SearchInputBox>
      </Container>
    </>
  );
};
