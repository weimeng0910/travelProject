/*
 * @Date: 2023-09-08 18:20:44
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-28 18:39:29
 * @FilePath: /travelProject/build/plugin/index.ts
 * @Description: Do not edit
 */
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';// 单文件组件支持
import legacy from '@vitejs/plugin-legacy';
import vitePluginImp from 'vite-plugin-imp';
import macrosPlugin from "vite-plugin-babel-macros"
import svgr from "vite-plugin-svgr";
import eslintPlugin from 'vite-plugin-eslint';
import EnvironmentPlugin from "vite-plugin-environment"
/**
 * vite.config--createVitePlugins
*/
export default function createVitePlugins({ variables }: { variables: any }) {
  const opt = { variables: variables };
  const vitePlugins: (Plugin | Plugin[])[] = [
    macrosPlugin(),
    EnvironmentPlugin("all"),
    react({
      babel: {

        plugins: [
          "babel-plugin-transform-vite-meta-env",
          ["babel-plugin-transform-import-meta", { "module": "ES6" }],

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
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
      exclude: [],
    }),

  ]

  return vitePlugins
}