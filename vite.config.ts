import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import postCssPxToRem from 'postcss-pxtorem';
import autoprefixer from 'autoprefixer';
import eslintPlugin from 'vite-plugin-eslint';
import legacy from '@vitejs/plugin-legacy';
import * as path from 'path';
import Components from 'unplugin-vue-components/vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

const isDev = process.env.NODE_ENV;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const version = `v${process.env.npm_package_version}`;
  const git_hash = process.env.npm_config_git_hash || '?';
  return {
    base: '/',
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
      },
    },
    define: {
      __APP_VERSION__: JSON.stringify(version),
      __GIT_HASH__: JSON.stringify(git_hash),
    },
    plugins: [
      ViteEjsPlugin({
        __APP_VERSION__: version,
        __GIT_HASH__: git_hash,
      }),
      vue(),
      eslintPlugin(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      Components({
        resolvers: [],
        dts: true, // enabled by default if `typescript` is installed
        collapseSamePrefixes: true,
      }),
    ],
    css: {
      postcss: {
        plugins: isDev
          ? []
          : [
              postCssPxToRem({
                rootValue: 16,
                propList: ['*'],
              }),
              autoprefixer({
                overrideBrowserslist: ['last 2 versions'],
                grid: true,
              }),
            ],
      },
    },
  };
});
