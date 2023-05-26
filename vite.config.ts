import { ConfigEnv, defineConfig, UserConfigExport, loadEnv } from 'vite';
import createVitePlugins from './vite-config/plugin/index';
import { configCss } from './vite-config/css/index'
import { configServer } from './vite-config/server/index'
import { resolve } from 'path';
import setProBuild from './vite-config/pro'

//配制
const config: UserConfigExport = {
  //base：开发或生产环境服务的公共基础路径
  //类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
  base: '/',
  // 需要用到的插件数组。Falsy 虚值的插件将被忽略，插件数组将被扁平化（flatten）
  plugins: createVitePlugins({ variables: process.env }),
  /**
     该目录中的文件在开发期间在 / 处提供，并在构建期间复制到 outDir 的根目录，并且始终按原样提供或复制而无需进行转换。
     该值可以是文件系统的绝对路径，也可以是相对于项目的根目录的相对路径。
       将 publicDir 设定为 false 可以关闭此项功能。
  */
  publicDir: 'public',

  // 解析相关
  resolve: {
    //路径别名
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
      '@': resolve(__dirname, 'src'),
      //'__ROOT__': resolve(__dirname, ''),
      // "@assets": path.resolve(__dirname, "src/assets"),
      // "@components": path.resolve(__dirname, "src/components"),
      // "@images": path.resolve(__dirname, "src/assets/images"),
      // "@pages": path.resolve(__dirname, "src/pages"),
      // "@store": path.resolve(__dirname, "src/store"),
    },
  },
  //css相关
  css: configCss(),
  //server
  server: configServer(),
}
//command：根据运行的命令区分配置，serve为开发环境，否则为build生产环境
//mode：根据环境区分配置
export default defineConfig(async ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  let build: any = {
    minify: false, // 跟踪这个警告[https://github.com/element-plus/element-plus/issues/3219#issuecomment-960374776]
    outDir: process.env.VITE_DIST_NAME, //打包文件名称
    assetsDir: 'assets', //打包静态文件的存储地址
    chunkSizeWarningLimit: 500,

  }
  if (mode === 'development') {
    const { rollupOptions } = setProBuild()
    build.rollupOptions = rollupOptions
  }
  if (mode == 'production') {
    const { rollupOptions, terserOptions } = setProBuild()
    build.rollupOptions = rollupOptions
    build.terserOptions = terserOptions
  }
  // 这里的 command 默认 === 'serve'
  // 当执行 vite build 时，command === 'build'
  // 所以这里可以根据 command 与 mode 做条件判断来导出对应环境的配置
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const envFiles = [
    /** mode local file */ `.env.${mode}.local`,
    /** mode file */ `.env.${mode}`,
    /** local file */ `.env.local`,
    /** default file */ `.env`
  ];
  console.log(envFiles, '001');

  return { ...config, build }
});