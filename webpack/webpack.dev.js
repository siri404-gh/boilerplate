const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const {
  outputFileName, sourceMapType, devServer, htmlWebpackPlugin,
} = require('./webpack.utils');

module.exports = Merge(CommonConfig, {
  devtool: sourceMapType,
  output: {
    sourceMapFilename: `${outputFileName}.map`,
  },
  devServer,
  plugins: [
    htmlWebpackPlugin,
  ],
  mode: 'development',
});
