/*
 * @Date: 2023-06-07 11:51:28
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-30 10:05:15
 * @FilePath: /travelProject/src/utils/http/index.ts
 * @Description: Do not edit
 */
import qs from "qs";
//import * as auth from "auth-provider";
//import { useAuth } from "context/auth-context";
import { useCallback } from "react";
/**
 *  @date 07.06.2023
 *  @description Fetch hook
 */
//用于请求的服务器 URL
//const apiUrl = import.meta.env.VITE_APP_API_URL;
const apiUrl = process.env.VITE_APP_API_URL;



//定义配制的类型,token,data并不属于 RequestInit 类型， 所以这里定义的类型要加上
interface Config extends RequestInit {
  token?: string;
  data?: object;
}
/**
 * 创建 fetch请求,fetch请求本身需要传入一个url和一个options
 * const{method,headers}=options;
 */

export const http = async (
  endpoint: string,//url中的endpoint，例如http://localhost:3000/project的project
  //{ data, token, headers, ...customConfig }: Config = {}
  { data, headers, ...customConfig }: Config = {}
) => {
  //定义传入fetch请求中config
  const config = {
    method: "GET",//默认是GET,后面的...customConfig有其它请求会覆盖
    // `headers` 是即将被发送的自定义请求头
    headers: {
      //Authorization: token ? `Bearer ${token}` : "",//传入toekn
      "Content-Type": data ? "application/json" : "",// 添加携带的数据格式，根据需求填写，传参方式表单
    },
    ...customConfig,//options中剩余的其它配制
  };
  //对携带的参数进行处理
  //在fetch中get请求中请求的参数是带在url中的，post和put,delete是入在body中的
  if (config.method.toUpperCase() === "GET") {
    //endpoint加上携带的参数，qs.stringify通过这个方法，将要传递的对象转换成字符串，拼接成带参数的请求地址
    endpoint += `?${qs.stringify(data)}`;
  } else {
    //读取传入的数据格式类型，不是表单数据使用JSON库进行格式化
    config.body = JSON.stringify(data || {});
  }

  // axios 和 fetch 的表现不一样，axios可以直接在返回状态不为2xx的时候抛出异常
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        //await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);//fetch本身不会抛出异常，所以这里手动抛出异常
      }
    });
};

// JS 中的typeof，是在runtime时运行的
// return typeof 1 === 'number'

// TS 中的typeof，是在静态环境运行的
// return (...[endpoint, config]: Parameters<typeof http>) =>
export const useHttp = () => {
  //const { user } = useAuth();
  // utility type 的用法：用泛型给它传入一个其他类型，然后utility type对这个类型进行某种操作
  return useCallback(
    (...[endpoint, config]: Parameters<typeof http>) =>
      //http(endpoint, { ...config, token: user?.token }),
      http(endpoint, { ...config }),
    []
  );
};

