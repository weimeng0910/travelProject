
export function configServer() {
  return {
    //host：指定服务器应该监听哪个 IP 地址， 
    //如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址
    host: '0.0.0.0',
    //port：指定开发服务器端口
    port: 3000,
    //https：启用 TLS + HTTP/2。注意：当 server.proxy 选项 也被使用时，将会仅使用 TLS。
    https: false,
    //proxy：服务器代理
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,
        rewrite: (path: any) => path.replace(/^\/api/, '')
      },
      '^/papi': {
        target: 'http://127.0.0.1:1099',
        changeOrigin: true,
        rewrite: (path: any) => path.replace(/^\/papi/, '')
      },
    }
  }
}