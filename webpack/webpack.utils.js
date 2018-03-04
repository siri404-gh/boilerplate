const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const {
  webpack: {
    entry, dist, outputFileName, resolveExtensions, sourceMapType, bundle, host, port,
    publicPath, cleanFolders, title, template, fileName,
  },
} = require('../globals');

module.exports = {
  entry,
  dist,
  outputFileName,
  resolveExtensions,
  sourceMapType,
  bundle,
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, `.${dist}`),
    port,
    host,
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath,
    // proxy: {
    //   "**": "http://localhost:5000"
    // }
  },
  cleanWebpackPlugin: new CleanWebpackPlugin(cleanFolders, {
    root: path.join(__dirname, '..'),
    verbose: true,
    dry: false,
  }),
  htmlWebpackPlugin: new HtmlWebpackPlugin({
    title,
    template,
  }),
  manifestPlugin: new ManifestPlugin({
    fileName,
  }),
  provide: new webpack.ProvidePlugin({
    React: 'react',
    Component: ['react', 'Component'],
    ReactDOM: ['react-dom'],
  }),
  stats: {
    warnings: false,
  },
  _module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
};
