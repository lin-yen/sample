# sample

<!--   my-icons -->
<p align="center">
  <a href="https://cn.vitejs.dev"><img src="https://img.shields.io/badge/Vite-^5.1.6-a750fe.svg"></a>
  <a href="https://vuejs.org"><img src="https://img.shields.io/badge/Vue-^3.4.21-42b883.svg"></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/Typescript-~5.4.0-2f74c0.svg"></a> 
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

> 使用 [commitizen](https://github.com/commitizen/cz-cli)，規範格式及內容，以便生成 CHANGELOG

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
