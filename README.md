# sample

<!--   my-icons -->
<p align="center">
  <a href="https://nodejs.org/en"><img src="https://img.shields.io/badge/node-22.11.0-5FA04E.svg?logo=node.js"></a>
  <a href="https://www.npmjs.com"><img src="https://img.shields.io/badge/npm-10.9.0-CB3837.svg?logo=npm"></a>
  <a href="https://cn.vitejs.dev"><img src="https://img.shields.io/badge/vite-^5.4.10-646CFF.svg?logo=vite"></a>
  <a href="https://vuejs.org"><img src="https://img.shields.io/badge/Vue-^3.5.12-4FC08D.svg?logo=vue.js"></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/Typescript-~5.6.3-2f74c0.svg?logo=typescript"></a> 
</p>

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) with some Packages:

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).
- [Vue Extension Box](https://marketplace.visualstudio.com/items?itemName=MisterJ.vue-volar-extention-pack)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Instructions for Developing in a Windows Environment

See [DEV_WINDOWS.md](./DEV_WINDOWS.md)

## Project Setup

```sh
# 安裝套件
npm install

# husky 初始化
npm run prepare
```

### Compile and Hot-Reload for Development

```sh
npm start
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Lint style with [Stylelint](https://stylelint.io/)

```sh
npm run lint:style
```

### Check types with [vue-tsc](https://www.npmjs.com/package/vue-tsc)

```sh
npm run type-check
```

### Commit

使用 [commitizen](https://github.com/commitizen/cz-cli) 格式化 commit 訊息，規範 CHANGELOG 內容

```shell
# 安裝 commitizen
npm install -g commitizen

# commit
git cz
```

### Release

```sh
npm run release
```
