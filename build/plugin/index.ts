import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';// 单文件组件支持
import legacy from '@vitejs/plugin-legacy';
import vitePluginImp from 'vite-plugin-imp';

//import { configViteComponents } from './components';
//import { configViteCompression } from './compression';
//import { configWindiCSS } from './windicss';
//import { configHtml } from './html';
//import { visualizer } from 'rollup-plugin-visualizer'
/**
 * vite.config--createVitePlugins
*/
export default function createVitePlugins({ variables }: { variables: any }) {
  const opt = { variables: variables };
  const vitePlugins: (Plugin | Plugin[])[] = [
    react() as Plugin[],
    //兼容旧的浏览器
    legacy({
      targets: ['Android >= 39', 'Chrome >= 39', 'Safari >= 10.1', 'iOS >= 10', '> 0.5%'],
      polyfills: ['es.promise', 'regenerator-runtime']
    }),
    //自动导入组件库样式
    vitePluginImp({
      libList: [
        {
          libName: 'antd-mobile',
          style: (name) => `antd-mobile/es/${name}/style`,
          libDirectory: 'es'
        }
      ]
    }),


  ]

  return vitePlugins
}