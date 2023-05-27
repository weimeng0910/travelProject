//import { render, screen } from '@testing-library/react';
//import App from '../App';

//describe('App', () => {
//  it('should work as expected', () => {
//    render(<App />);
//    expect(1 + 1).toBe(2);
//  });
//});

import sum from './sum';
test('1 + 1 应该等于 2', () => {
  expect(sum(1, 1)).toBe(2);
});
