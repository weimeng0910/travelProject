/*
 * @Date: 2023-11-17 09:30:31
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-20 10:31:24
 * @FilePath: /react-antd/src/components/Button/Button.test.tsx
 * @Description: Button test
 */
import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';
//test('our frist react test case', () => {
//  //取得一个wrapper对象
//  const wrapper = render(<Button>Nice</Button>);
//  //创建一个dom
//  const element = wrapper.queryByText('Nice');

//  expect(element).toBeTruthy();
//  //判断元素是否出现在文档中
//  expect(element).toBeInTheDocument();
//});
describe('test Button component', () => {
  it('should render the correct default button ', () => {
    //取得一个wrapper对象
    const wrapper = render(<Button>Nice</Button>);
    //创建一个dom
    const element = wrapper.getByText('Nice');
    //判断元素是否出现在文档中
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
  });
  it('should render the correct component based on differnt props', () => {});
  it('should render a link when btnType equals link and href is provided', () => {});
  it('should render disabled button when disabled set to true', () => {});
});
