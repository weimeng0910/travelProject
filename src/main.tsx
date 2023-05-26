import './wdyr'; // <--- first import
import { mocker } from '@/mocks/browser';
import ReactDOM from 'react-dom/client';
import App from './App';
/**
 * @data 24.05.2023
 * @file  main
 */

// 开发环境开启mock服务
if (process.env.NODE_ENV === 'development') {
  //const { mocker } = require('./mocks/browser');
  mocker.start({
    // 对于没有 mock 的接口直接通过，避免异常
    onUnhandledRequest: 'bypass',
  });
}
//console.log(' process.env: ', process.env);

console.log(import.meta.env.VITE_APP_TITLE);
console.log(import.meta.env);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
