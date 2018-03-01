const path = require('path');

const {
  entry, dist, outputFileName, _module, resolveExtensions, stats, provide,
} = require('./webpack.utils');

module.exports = {
  entry: { app: entry },
  output: {
    path: path.resolve(__dirname, `.${dist}`),
    filename: outputFileName,
    publicPath: '/',
  },
  resolve: {
    extensions: resolveExtensions,
    modules: [path.join(__dirname, 'components'), 'node_modules'],
  },
  plugins: [
    provide,
  ],
  module: _module,
  stats,
};
