/*
 * @Date: 2023-11-02 13:50:04
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-03 11:27:53
 * @FilePath: /travelProject/src/components/Tabs/Tabs.module.ts
 * @Description: Do not edit
 */
import styled from 'styled-components';
import { Button } from 'antd';
export const TabBar = styled.div`
  background: #fff;
 
  display: flex;
  justify-content: space-around;
  flex: 0;
  border-radius: 8px;
  margin: 16px;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: calc((var(--tab-active-index) + 0.5) / (var(--tab-total)) * 100%);
    background: $highlight;
    height: 4px;
    width: 32px;
    transition: 0.15s;
    border-radius: 4px;
    transform: translate(-50%, 0px);
  }
`;

export const TabBarItem = styled(Button)`
  margin: 0 34px 0 0;
  padding: 12px 0px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: none;
  box-shadow: none;
  width: 100px;
  &.active,
  &.hover {
    color: #108ee9;
    border-bottom: 2px solid #1890ff;
  }
`;

export const TabContent = styled.div`
  position:absolute;
  top:100%;
  left: 20px;
  max-width: 1126px;
  width: 1126px;
  height: 200px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 48px;
  color: white;
  animation: fadeInUp 0.25s;
  margin-top: 30px;
  background-color: red;
`;