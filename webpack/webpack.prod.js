const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const { htmlWebpackPlugin } = require('./webpack.utils');

module.exports = Merge(CommonConfig, {
  plugins: [
    htmlWebpackPlugin,
  ],
  mode: 'production',
});
