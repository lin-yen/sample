import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import eslint from 'vite-plugin-eslint';
import Components from 'unplugin-vue-components/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const version = `v${process.env.npm_package_version}`;
  const git_hash = process.env.npm_config_git_hash || '?';

  return {
    plugins: [
      ViteEjsPlugin({
        __APP_VERSION__: version,
        __GIT_HASH__: git_hash,
      }),
      vue(),
      vueJsx(),
      eslint(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      Components({
        resolvers: [],
        dts: true,
        directoryAsNamespace: true,
        collapseSamePrefixes: true,
      }),
      VitePWA({
        registerType: 'prompt',
        manifest: {
          name: 'sample',
          short_name: 'sample',
          theme_color: '#ffffff',
        },

        workbox: {
          navigateFallbackDenylist: [/^\/api\//],
        },

        devOptions: {
          enabled: false,
        },
      }),
    ],
    define: {
      __APP_VERSION__: JSON.stringify(version),
      __GIT_HASH__: JSON.stringify(git_hash),
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    base: '/',
    build: {
      outDir: 'dist',
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://api.example.com',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
