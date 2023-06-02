# Vite：TypeScript + Jest + Sass + ESLint

#🌈 🚀 React18 Hook + typescript4 + Jest 🚀

# Foreword

Build React application templates based on Vite, convenient and fast development, React (React Hook + React-router + Axios) ESLint and other project development specifications.

# technology stack

- 使用 Vite 4.0 构建项目（不使用 create-react-app、umi 等脚手架）；
- 使用 Babel8 配置转换 ES6、React、Mobx 等语法；
- 使用 TypeScript 进行严格类型检查；
- 使用 ESLint 代码规范校验，Prettier stylelint 代码自动格式化工具，EditorConfig 代码风格统一工具
- React 版本 V18.0.0，全部采用函数化 Hooks 特性开发项目组件；l
- 采用 React-router6 工具 配置项目路由；
- 采用 Redux + Hooks 和 URl 实现项目数据状态管理；
- 封装 Axios 库实现与后台 http 请求交互；

## Directory Structure

```

├── dist                    // 打包输出目录
├── public                  // 项目公开目录
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
└── README.md                      // 项目说明
```

### Use Mock Service Worker for mock data service

1.set up

```
yarn add msw --dev

```

2.Generate a Service Worker script in the public folder

```
yarn msw init public/ --save

```

### Custom environment variables in vite（vite 中自定义环境变量）

Vite 内置了 dotenv 这个第三方库， dotenv 会自动读取.env 文件

.env # 所有情况下都会加载
.env.[mode] # 只在指定模式下加载

### Setup Jest with Vite

```
yarn add @testing-library/jest-dom @testing-library/react @testing-library/user-event --save-dev
yarn add @swc/core @swc/jest --save-dev

```

### To Use Media Queries in React

```
yarn add @mantine/hooks
```
