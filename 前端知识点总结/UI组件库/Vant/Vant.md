## 引入 vant 使自动引入样式

```js
// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
 plugins: [
  ['import', {
   libraryName: 'vant',
   libraryDirectory: 'es',
   style: true
  }, 'vant']
 ]
};
```



## 另外还有两种方法：

1. 导入所有组件（不推荐）
Vant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法。

```js
import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp();
app.use(Vant);
```

2.手动按需引入组件（不推荐）
在不使用任何构建插件的情况下，可以手动引入需要使用的组件和样式。

```js
// 引入组件脚本
import Button from 'vant/es/button/index';
// 引入组件样式
// 若组件没有样式文件，则无须引入
import 'vant/es/button/style/index';
```

