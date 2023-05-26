import WindiCSS from 'vite-plugin-windicss'
import path from "path";
/**
 * 按需 CSS 实用程序（与 Tailwind CSS v2 完全兼容）
 * 按需原生元素样式重置（预检）
*/
const { dirname, join, resolve } = require('path');

export function configWindiCSS() {
  return WindiCSS({
    config: path.resolve(process.cwd(), 'windi.config.ts'),
    root: dirname(__dirname),
  })
}