import { resolve } from 'path';
//build构建相关
const setProBuild = function () {
  return {
    //rollupOptions：自定义的 Rollup 打包配置，并将与 Vite 的内部 Rollup 选项合并
    rollupOptions: {
      input: {
        index: resolve(process.cwd(), 'index.html'), // 把页面放在外面，路径简短 防止src/packages/web/index.html ，建议vite把key(web、lib)可也阔以映射成页面路径，就避免这个问题
        //lib: path.resolve(process.cwd(), 'lib.html'),
        //admin: path.resolve(process.cwd(), 'admin.html'),
        //web: path.resolve(process.cwd(), 'web.html'),
      },
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/static/[name]-[hash].[ext]',
        // 最小化拆分包
        manualChunks(id: any) {
          // 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源重复引入
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 去掉注释内容
    output: {
      comments: true,
    },
  }
}

export default setProBuild