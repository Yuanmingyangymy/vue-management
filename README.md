# my-app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<hr>

### 侧边栏(CommonAside)
### 页面头部(CommonHeader)
#### 点击左侧图标实现侧边栏的折叠/展开
使用vuex来实现数据的存储管理

### 页面右上侧
element-ui 结合flex布局实现
### 页面右下侧
使用了axios封装请求
使用mockjs（前端用来模拟后端接口的工具）
注意：mockjs使用时需要在main.js中引入
echarts的基本使用，数据获取需要自己一点点调试来得到
### 面包屑
vuex的使用
这部分的逻辑：
1.在CommonAside.vue中，点击菜单后增加处理逻辑(调用vuex的mutation)
2.在store的tab.js中写更新面包屑的逻辑
3.CommonHeader中显示的应该是动态数据(用到了辅助函数)，然后这块用到了解构赋值，这地方**没看懂**
### tag
1.搞清楚这部分在页面中的什么位置
2.理清功能：点击侧边栏增加/跳转,高亮显示当前路由,可删除，可跳转，路由和面包屑也得跟着改变
3.vuex的操作：mapMutation
    CommonTag中触发删除标签操作时，要向store的mutation中传递参数，处理删除的逻辑写在vuex的相关文件中
