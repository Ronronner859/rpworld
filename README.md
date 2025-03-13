# rpworld-site 项目开发文档

## 项目简介

本项目基于 Nuxt.js 3 开发，使用 Vue 3 进行前端渲染，并集成了 Vuetify 作为 UI 组件库。此外，项目支持国际化（i18n），使用 Tailwind CSS 进行样式管理，并采用 `pnpm` 作为包管理工具。项目进行了多项优化，以提高网站的响应速度和适配能力。

## 目录结构

```
nuxt-app/
│── assets/            # 静态资源（CSS、图片等）
│── components/        # 复用组件
│── layouts/           # 页面布局
│── pages/             # 页面路由
│── plugins/           # Nuxt 插件
│── public/            # 公共静态资源
│── store/             # 状态管理（可选）
│── nuxt.config.ts     # Nuxt 配置文件
│── package.json       # 依赖管理
│── tsconfig.json      # TypeScript 配置
```

## 依赖项

### 主要依赖（dependencies）
- `nuxt@3.16.0`：Nuxt.js 框架
- `vue@3.5.13`：Vue 3 核心库
- `vue-router@4.5.0`：Vue 路由管理
- `vue-i18n@11.1.2`：国际化支持
- `@mdi/font@7.4.47`：Material Design 图标库

### 开发依赖（devDependencies）
- `@nuxtjs/i18n@9.3.1`：Nuxt.js 国际化插件
- `@nuxtjs/tailwindcss@6.13.2`：Tailwind CSS 框架
- `sass@1.85.1`：Sass 预处理器
- `vite-plugin-vuetify@2.1.0`：Vuetify Vite 插件
- `vuetify@3.7.16`：Vuetify UI 组件库

## 安装与运行

### 安装依赖

本项目使用 `pnpm` 作为包管理工具，请确保已安装 pnpm。

```sh
npm install -g pnpm
```

然后安装项目依赖：

```sh
pnpm install
```

### 运行项目

```sh
pnpm dev
```

### 构建项目

```sh
pnpm build
```

### 生成静态站点

```sh
pnpm generate
```

### 预览构建后的项目

```sh
pnpm preview
```

## 主要功能

### 1. 国际化支持（i18n）
本项目集成了 `vue-i18n` 和 `@nuxtjs/i18n`，可实现多语言切换。

#### 配置示例（`nuxt.config.ts`）：
```ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'zh',
    vueI18n: {
      messages: {
        en: {
          welcome: 'Welcome to our app!'
        },
        zh: {
          welcome: '欢迎使用我们的应用！'
        }
      }
    }
  }
});
```

### 2. UI 组件（Vuetify）
本项目使用 `vuetify` 作为 UI 组件库，并通过 `vite-plugin-vuetify` 进行优化。

#### 使用示例：
```vue
<template>
  <v-btn color="primary">按钮</v-btn>
</template>
```

### 3. Tailwind CSS 支持
使用 `@nuxtjs/tailwindcss` 进行样式管理，可直接在 Vue 组件中使用 Tailwind CSS 类。

#### 示例：
```vue
<template>
  <div class="text-red-500">红色文本</div>
</template>
```

## 性能优化

### 1. 代码分割与懒加载
- 采用 Nuxt.js 的 `dynamic import()` 机制，对组件进行懒加载，减少首屏加载时间。
- 配置 `nuxt.config.ts`，启用 `experimental.inlineStyles`，减少 CSS 体积。

### 2. 静态资源优化
- 启用了 `nuxt/image` 模块，自动优化图片资源，支持 WebP、AVIF 格式。
- 通过 `vite-plugin-vuetify` 仅导入所需的 Vuetify 组件，减少无用代码。

### 3. SSR 和缓存
- 采用 Nuxt.js 内置的 `serverMiddleware` 处理部分请求，减少后端 API 请求压力。
- 启用 `generate.cache`，对静态页面进行缓存，提高加载速度。

### 4. 适配与响应式优化
- 采用 `@nuxtjs/tailwindcss`，使用 `flex`、`grid` 进行自适应布局。
- 针对移动端优化，支持 `meta viewport` 配置，确保流畅的用户体验。
- 使用 `v-responsive` 组件优化 Vuetify 图片和容器尺寸。

## 代码风格

- 代码格式化工具：`Prettier`
- 代码校验工具：`ESLint`
- 推荐使用 TypeScript

## 结语

本项目基于 Nuxt 3 构建，支持 SSR、静态站点生成、国际化、Vuetify UI 组件库和 Tailwind CSS，并进行了一系列优化，提高了响应速度和适配能力。开发者可以根据自身需求进行扩展，如添加状态管理（Pinia）或 API 请求库（Axios）。

