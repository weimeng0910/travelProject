import ViteComponents from 'vite-plugin-components'
/**
 * 实现组件库或内部组件自动按需引入，不需要手动进行import
*/
export function configViteComponents() {
  return ViteComponents()
}