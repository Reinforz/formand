const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  staticDirs: [],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    reactDocgen: 'none'
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../')
    ];

    return config;
  }
};
