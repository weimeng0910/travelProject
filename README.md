#🌈 🚀 React18 Hook + typescript4 + Jest 🚀

# Foreword

Build React application templates based on Vite, convenient and fast development, React (React Hook + React-router + Axios) ESLint and other project development specifications.

## technology stack

- 使用 Vite 4.0 构建项目（不使用 create-react-app、umi 等脚手架）；

- 使用 Babel8 配置转换 ES6、React、Mobx 等语法；

- 使用 TypeScript 进行严格类型检查；

- 使用 ESLint 代码规范校验，Prettier stylelint 代码自动格式化工具，EditorConfig 代码风格统一工具

- React 版本 V18.0.0，全部采用函数化 Hooks 特性开发项目组件；l

- 采用 React-router6 工具 配置项目路由；

- 采用 Redux + Hooks 和 URl 实现项目数据状态管理；

- 封装 Axios 库实现与后台 http 请求交互；

## Directory Structure

`

├── dist // 打包输出目录
├── public // 项目公开目录
├── index.html 项目入口
├── mock mock 目录
├── package.json
├── public
├── src
│ ├── App.tsx 主应用
│ ├── _tests_ 测试
│ ├── api 请求中心
│ ├── assets 资源目录（图片、less、css 等）
│ ├── mocks mock data
│ ├── components 项目组件
│ ├── constants 常量
│ └── vite-env.d.ts 全局声明
│ ├── main.tsx 主入口
│ ├── pages 页面目录
│ ├── routes 路由配置
│ ├── types ts 类型定义
│ ├── store 状态管理
│ └── utils 基础工具包
├── tsconfig.json ts 配置
├── .eslintrc.js eslint 配置
├── .prettierrc.json prettier 配置
├── .gitignore git 忽略配置
└── vite.config.ts vite 配置
└── README.md // 项目说明
`

# API

#### 本项目前后端接口规范和接口文档。

# 数据

### 1 数据表结构

###### 1-1 用户相关

| 参数名   | 类型   | 说明    |
| -------- | ------ | ------- |
| id       | nember | 用户 id |
| username | string | 用户名  |
| password | string | 密码    |

示例

```javascript
  {
    "error_code": 0,
    "data": {
      "id": "1",
      "username": "12154545",
      "name": "吴系挂",
      "groupid": 2 ,
      "reg_time": "1436864169",
      "last_login_time": "0",
    }
  }

```

###### 1-2 商品相关

| 参数名      | 类型    | 说明     |
| ----------- | ------- | -------- |
| id          | number  | 商品 ID  |
| goods_sn    | number  | 产品编号 |
| name        | string  | 产品名称 |
| category_id | number  | 类别 ID  |
| brand_id    | number  | 品牌 ID  |
| keywords    | string  | 关键词   |
| brief       | string  | 简短介绍 |
| is_on_sale  | boolean | 促销     |
| sort_order  | number  | 排序     |
| pic_url     | string  | 图片网址 |

| is_new | boolean | 新产品 |
| is_hot | boolean | 最火产品 |
|
|retail_price | number | 零售价格 |
|counter\_\_price | number | 柜台价格 |
| detail | string | 详情 |
| add_time | Date | 添加时间 |
| update_tiem | Date |更新时间 |
| deleted_tiem| Date |删除时间|
