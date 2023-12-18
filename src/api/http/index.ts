/*
 * @Date: 2023-06-07 11:51:28
 * @Description: Fetch hook
 */
import qs from "qs";
//import * as auth from "auth-provider";
//import { useAuth } from "context/auth-context";
import { useCallback } from "react";
import { API_URL } from '@/common/constants/config';

//用于请求的服务器 URL

const apiUrl = API_URL;

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
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const method = customConfig.method || 'GET';
  const config = {
    method,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",//传入toekn
      "Content-Type": data ? "application/json" : "",// 添加携带的数据格式，根据需求填写，传参方式表单
    },
    ...customConfig,//options中剩余的其它配制
  };

  //对携带的参数进行处理
  //在fetch中get请求中请求的参数是带在url中的，post和put,delete是入在body中的
  if (method.toUpperCase() === "GET" || method.toUpperCase() === 'HEAD') {
    //endpoint加上携带的参数，qs.stringify通过这个方法，将要传递的对象转换成字符串，拼接成带参数的请求地址
    delete config.body;
    if (data) {
      endpoint += `?${qs.stringify(data)}`;

    }

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
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        // Only attempt to parse as JSON if the content type is JSON
        const responseData = await response.json();
        if (response.ok) {
          return responseData;
        } else {
          return Promise.reject(responseData);
        }
      } else {
        // If the response is not JSON, handle accordingly (e.g., return raw text)
        return response.text();
      }
    });
};

export const useHttp = () => {
  //const { user } = useAuth();

  return useCallback(
    (...[endpoint, config]: Parameters<typeof http>) =>
      //http(endpoint, { ...config, token: user?.token }),
      http(endpoint, { ...config }),
    []
  );
};

