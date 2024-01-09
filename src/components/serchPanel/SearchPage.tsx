/*
 * @Date: 2023-06-13 11:07:56
 * @Description: SearchPanel
 */
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import {
  StyledInput,
  Container,
  PrimaryButton,
  WelcomeText,
  SearchInputBox,
} from './SearchPage.module';
/**
 * SearchPanel
 */
export const SearchPage: React.FC = () => {
  return (
    <Container>
      <WelcomeText>
        <div>Travel Around The</div>
        <div></div>
      </WelcomeText>
      <SearchInputBox>
        <div>
          <div>World</div>
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
