import { resolve } from 'path';
export function configCss() {
  return {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // antd 定制主题样式
        modifyVars: {
          '@fill-body': '#fff'
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