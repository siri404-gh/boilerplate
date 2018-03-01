const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const { cleanWebpackPlugin, htmlWebpackPlugin } = require('./webpack.utils');

module.exports = Merge(CommonConfig, {
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin,
  ],
  mode: 'production',
});
