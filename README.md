# sample

<!--   my-icons -->
<p align="center">
  <a href="https://cn.vitejs.dev"><img src="https://img.shields.io/badge/Vite->=4.3.9-a750fe.svg"></a>
  <a href="https://vuejs.org"><img src="https://img.shields.io/badge/Vue->=3.2.47-42b883.svg"></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/Typescript-^5.2.2-2f74c0.svg"></a> 
</p>

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin). (also can use [Vue Volar extension Pack](https://marketplace.visualstudio.com/items?itemName=MisterJ.vue-volar-extention-pack))

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## commit message 規範
> 使用 [commitizen](https://github.com/commitizen/cz-cli)，規範格式及內容，以便生成 CHANGELOG

```shell
# 安裝 commitizen
npm install -g commitizen

# husky 初始化
npm run prepare

# commit
git cz
```

## Windows 環境設定
請參考[Windows 環境設定](./WINDOWS.md)

## 常用指令
```shell
# 啟動專案
npm run start

# 格式、樣式及型別檢查
npm run lint

# 打包客端
npm run build

# 打包 server
npm run build:server

# 更新版本
npm run version

# 字典檔 csv 轉 json
npm run locales
```
