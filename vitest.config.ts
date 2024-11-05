import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig((configEnv) =>
  mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      test: {
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'src/e2e/*'],
        root: fileURLToPath(new URL('./', import.meta.url)),
        coverage: {
          provider: 'v8',
          reporter: ['text', 'json', 'html'],
          exclude: [
            ...(configDefaults.coverage.exclude || []),
            '**/e2e/**',
            '**/models/**',
            '**/__tests__/**',
            '**/dev-tools/**',
            '**/coverage/**',
            'commitlint.config.cjs',
          ],
        },
      },
    }),
  ),
);
