import './wdyr'; // <--- first import
import { mocker } from '@/mocks/browser';
import { createRoot } from 'react-dom/client';
//import { AppProviders } from '@/context';
import App from './App';
/**
 * @data 24.05.2023
 * @file  main
 */

// Enable the mock service in the development environment
//(开发环境开启mock服务)
if (process.env.NODE_ENV === 'development') {
  //const { mocker } = require('./mocks/browser');
  mocker.start({
    // For interfaces without mocks, pass directly to avoid exceptions
    //(对于没有 mock 的接口直接通过，避免异常)
    onUnhandledRequest: 'bypass',
  });
}
const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(<App />);
