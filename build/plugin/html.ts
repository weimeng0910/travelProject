import { createHtmlPlugin } from 'vite-plugin-html';

export function configHtml(opt: any) {
  return createHtmlPlugin({
    inject: {
      data: { ...opt.variables }
    },
    minify: true
  })
}