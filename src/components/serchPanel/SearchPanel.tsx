import React from 'react';
import { css } from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { NewInput, Container, NewButton, WelcomeText, WorldText } from './SearchPanel.module';
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
        <div>
          <Form layout="inline">
            <Form.Item>
              <NewInput
                prefix={<SearchOutlined />}
                placeholder="Search Destination"
                allowClear
                bordered
              />
            </Form.Item>
            <Form.Item>
              <NewButton type="primary">Search</NewButton>
            </Form.Item>
          </Form>
        </div>
      </Container>
    </>
  );
};
