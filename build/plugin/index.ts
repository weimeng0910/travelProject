import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';// 单文件组件支持
import legacy from '@vitejs/plugin-legacy';
import vitePluginImp from 'vite-plugin-imp';
import macrosPlugin from "vite-plugin-babel-macros"
import svgr from "vite-plugin-svgr";

/**
 * vite.config--createVitePlugins
*/
export default function createVitePlugins({ variables }: { variables: any }) {
  const opt = { variables: variables };
  const vitePlugins: (Plugin | Plugin[])[] = [
    macrosPlugin(),
    react({
      babel: {

        plugins: [
          //'@babel/plugin-transform-typescript',
          [
            'babel-plugin-styled-components',
            {
              ssr: false,
              pure: true,
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }) as Plugin[],


    svgr(),
    //兼容旧的浏览器
    legacy({
      targets: ['Android >= 39', 'Chrome >= 39', 'Safari >= 10.1', 'iOS >= 10', '> 0.5%'],
      polyfills: ['es.promise', 'regenerator-runtime']
    }),
    //自动导入组件库样式
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
          libDirectory: 'es'
        }
      ]
    }),


  ]

  return vitePlugins
}