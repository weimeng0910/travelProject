import { resolve } from 'path';
export function configCss() {
  return {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // antd 定制主题样式
        modifyVars: {
          '@fill-body': '#fff',
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        }
      },
      resolve: {
        alias: [
          {
            find: /^~/,
            replacement: '',
          }
        ],
      }
    }
  }
}