import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import Components from 'unplugin-vue-components/vite';
import { VitePWA } from 'vite-plugin-pwa';
import checker from 'vite-plugin-checker';
import { visualizer } from 'rollup-plugin-visualizer';
import { compression } from 'vite-plugin-compression2';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const version = `v${process.env.npm_package_version}`;
  const git_hash = process.env.npm_config_git_hash || '?';
  const showStats = process.env.VITE_SHOW_STATS === 'true';
  const isTest = process.env.NODE_ENV === 'test';

  return {
    plugins: [
      ViteEjsPlugin({
        __APP_VERSION__: version,
        __GIT_HASH__: git_hash,
      }),
      vue(),
      !isTest &&
        checker({
          enableBuild: false,
          eslint: {
            lintCommand: 'eslint .',
            useFlatConfig: true,
          },
          typescript: {
            tsconfigPath: './tsconfig.app.json',
          },
          vueTsc: {
            tsconfigPath: './tsconfig.app.json',
          },
          stylelint: {
            lintCommand: 'stylelint "**/*.{css,scss,vue,sass,html}"',
          },
        }),
      vueJsx(),
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
      !!showStats && visualizer({ open: true, gzipSize: true, brotliSize: true }),
      compression({ algorithm: 'gzip' }),
      compression({ algorithm: 'brotliCompress' }),
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
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/@vue/')) {
              return '@vue';
            }

            if (id.includes('node_modules/vue-router/')) {
              return 'vue-router';
            }

            if (id.includes('node_modules/vue-i18n/')) {
              return 'vue-i18n';
            }

            if (id.includes('node_modules/pinia/')) {
              return 'pinia';
            }
          },
        },
      },
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
