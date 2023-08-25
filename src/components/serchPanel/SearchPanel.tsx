import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import {
  NewInput,
  Container,
  NewButton,
  WelcomeText,
  WorldText,
  SearchInputBox,
} from './SearchPanel.module';
/**
 * @date 2023/06/13
 * @description SearchPanel
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
          <NewButton type="primary">Search</NewButton>
        </SearchInputBox>
      </Container>
    </>
  );
};
