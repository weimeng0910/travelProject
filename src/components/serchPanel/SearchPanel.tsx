/*
 * @Date: 2023-06-13 11:07:56
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-16 19:20:00
 * @FilePath: /travelProject/src/components/serchPanel/SearchPanel.tsx
 * @Description: SearchPanel
 */
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import {
  StyledInput,
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
    <Container>
      <WelcomeText>
        <div>Travel Around The</div>
        <div></div>
      </WelcomeText>
      <SearchInputBox>
        <div>
          <WorldText>World</WorldText>
          <div></div>
        </div>
        <div>
          <StyledInput
            prefix={<SearchOutlined rev={undefined} />}
            placeholder="Search Destination"
            allowClear
            bordered
          />
        </div>
        <div>
          <PrimaryButton>Search</PrimaryButton>
        </div>
      </SearchInputBox>
    </Container>
  );
};
