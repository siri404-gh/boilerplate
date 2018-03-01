const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const entry = './index.js';
const dist = './dist';
const outputFileName = '[name].bundle.js';
const resolveExtensions = ['.js', '.json', '.jsx'];
const sourceMapType = 'inline-source-map';
const bundle = 'bundle.js';
const host = 'localhost';
const port = 4000;
const publicPath = '/';
const cleanFolders = ['./*.log', './dist'];
const title = 'Title';
const template = 'index.ejs';
const fileName = '.manifest.json';

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
