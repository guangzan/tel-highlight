# 手机号码高亮

TelHighlight 把手机号码转换为数据结构，在 Vue、React、小程序 等任意前端框架渲染，使号码显示中带有高亮部分。

![GitHub](https://img.shields.io/github/license/guangzan/tel-highlight)

## 浏览器支持

TelHighlight 支持所有现代浏览器以及 IE9+。

## 安装

如果你使用 NPM 包管理器，可以通过如下命令安装：

```bash
npm i tel-highlight
```

or

```bash
yarn add tel-highlight
```

or

```bash
pnpm add tel-highlight
```

直接使用，[下载 tel-highlight.iife.js]() 并引入即可：

```html
<script src="path/to/tel-highlight.iife.js"></script>
```

在小程序中使用，可以通过 NPM 安装或下载并引入。

## 使用

以 Vue 为例：

```html
<script lang="ts" setup>
  import { telHighlight } from 'tel-highlight'
  const telData = telHighlight({ tel: 12345678910, highlight: 5678 })
</script>

<template>
  <div>
    <span
      v-for="(item, index) in telData"
      :key="index"
      :class="{ highlight: item.isHighlight }"
      >{{ item.num }}</span
    >
  </div>
</template>

<style scoped>
  .highlight {
    color: red;
  }
</style>
```

## API

### options.tel

- 描述：手机号码
- 默认值：`undefined`
- 是否必需：是
- 类型：`string | number`

### options.highlight

- 描述：号码中高亮部分
- 默认值：`""`
- 是否必需：否
- 类型：`string | number`

### options.separat

- 描述：是否将号码按照 3,4,4 格式分割
- 默认值：`false`
- 是否必需：否
- 类型：`boolean`

### options.separator

- 描述：分割符，options.separat 为 true 时生效
- 默认值：`" "`
- 是否必需：否
- 类型：`string`
