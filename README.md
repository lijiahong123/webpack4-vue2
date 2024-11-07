# webpack 配置

## 入口

- entry单入口
- 多入口

## 出口

- output
- 对象

```js
output: {
    filename:'bandel.[hash].js',
    path: '输出位置'
}
```

## 编译

### js

- ts 编译
- 语法降级
- 压缩混淆（生产环境）

### html

- copy 模板
- 模板注入变量

### 样式

- scss 编译成 css
- scss 嵌套展开
- 样式兼容性
- 浏览器前缀
- 样式分离
- 样式压缩

### 图片

- 背景图片
- image 图片
- 图片压缩
- base64 化
- 图片复制

### svg

### 字体

### vue 语法编译

### jsx 语法编译

### 语法检查

- 语法
- 格式化
- 自动修复
- eslint-loader

### runtime 代码插入

- 插入必要的 runtime 代码


### 分包


## webpack merge 环境区分

## 热跟新

## webpack log 输出
