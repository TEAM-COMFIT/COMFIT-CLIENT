import type { Preview } from '@storybook/react-vite';

// 나중에 전역 스타일 여기서 import
// vanilla-extract의 globalStyle / theme entry 여기서 불러옴
// 예: import '@/shared/styles/global.css.ts';

const preview: Preview = {
  parameters: {
    layout: 'padded',

    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
