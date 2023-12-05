/*
 * @Date: 2023-05-26 20:57:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-28 18:01:41
 * @FilePath: /travelProject/config/jest/setupTests.js
 * @Description: Do not edit
 */
import '@testing-library/jest-dom';
process.env.VITE_APP_API_URL = 'http://localhost:4000/';
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
});

Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: jest.fn(),
});
jest.mock('nanoid', () => {
  return {
    nanoid: () => {},
  };
});
