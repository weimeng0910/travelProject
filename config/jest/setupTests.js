/*
 * @Date: 2023-05-26 20:57:08
 * @Description: Do not edit
 */

import '@testing-library/jest-dom';

// Mocking Environment Variables and Functions
process.env.VITE_APP_API_URL = 'http://localhost:4000';
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
