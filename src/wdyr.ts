

import React from 'react';
//引入检查render的库
import whyDidYouRender from '@welldone-software/why-did-you-render';
/**
 * @date 2022/12/23
 * @description React 开发性能监测插件
 */
//如果是开发环境下运行
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line unicorn/prefer-module
  //const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    //这里设为true则检查所有的文件，我们设为false，因为我们清楚那个文件有过度渲染
    trackAllPureComponents: true,
  });
}