import { resolve } from 'path';
import postcsspxtoviewport from 'postcss-px-to-viewport-8-plugin';
export function configCss() {
  return {

    preprocessorOptions: {

      less: {
        math: "always",
        relativeUrls: true,
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