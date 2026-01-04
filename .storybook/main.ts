import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],

  framework: '@storybook/react-vite',

  viteFinal: async (storybookConfig) =>
    mergeConfig(storybookConfig, {
      resolve: {
        alias: {
          '@': resolve(__dirname, '../src'),
          '@app': resolve(__dirname, '../src/app'),
          '@pages': resolve(__dirname, '../src/pages'),
          '@widgets': resolve(__dirname, '../src/widgets'),
          '@features': resolve(__dirname, '../src/features'),
          '@shared': resolve(__dirname, '../src/shared'),
          '@images': resolve(__dirname, '../src/shared/assets/images'),
          '@icons': resolve(__dirname, '../src/shared/assets/icons'),
          '@api': resolve(__dirname, '../src/shared/api'),
          '@config': resolve(__dirname, '../src/shared/config'),
          '@model': resolve(__dirname, '../src/shared/model'),
          '@styles': resolve(__dirname, '../src/shared/styles'),
          '@types': resolve(__dirname, '../src/shared/types'),
          '@ui': resolve(__dirname, '../src/shared/ui'),
          '@lib': resolve(__dirname, '../src/shared/lib'),
        },
      },
    }),

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => !/node_modules/.test(prop.parent?.fileName || ''),
    },
  },
};

export default config;
