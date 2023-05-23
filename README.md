## React router v6.5.0

在最新的 6.5 版本中，react-router 提供了 2 种路由配置模式，jsx 和 object，object 配置形式如下：

```
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

```

如果想继续使用 jsx 的配置形式，需要通过使用 createRoutesFromElementsAPI

```
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rooter />}>
      <Route path="invoices" element={<Invoices />}>
        <Route path=":invoiceId" element={<Invoice />} />
      </Route>

      <Route path="expenses" element={<Expenses />} />

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
```

## git commit 报错

报错如下
husky - pre-commit hook exited with code 1 (error)
在 package.json 中将单引号更改为双引号

```
"*.{ts,tsx}": [
      "npm run lint",
      "bash -c \"npm run check-types\""
    ]
```

### 用 Why Did You Render 调试 React 的性能问题

```
yarn add --dev @welldone-software/why-did-you-render
```

1、在项目的根目录下添加一个 wdyr.js 文件。

```
import React from "react";

// Make sure to only include the library in development
if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true
  });
}


```

2、在 main.tsx 中导入 wdyr.ts 作为我们应用程序的第一个导入。

```
import "./wdyr"
```
