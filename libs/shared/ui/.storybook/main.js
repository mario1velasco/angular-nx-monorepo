// WATCH
// https://github.com/nrwl/nx/issues/8360#issuecomment-1009348005

module.exports = {
  stories: ['../src/lib/components/**/*.stories.ts'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
  ],
  core: {
    builder: 'webpack5',
  },
};
