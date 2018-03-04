const webpackConfig = require('./webpack/webpack.dev');
const {
  karma: {
    browsers, coverageReporter, reporters, exclude, files, frameworks, plugins, preprocessors,
  },
} = require('./globals');

module.exports = config => config.set({
  files,
  exclude,
  frameworks,
  preprocessors,
  webpack: webpackConfig,
  coverageReporter,
  reporters,
  plugins,
  browsers,
  basePath: '.',
  port: 9876,
  colors: true,
  logLevel: config.LOG_ERROR,
  autoWatch: true,
  singleRun: true,
  concurrency: Infinity,
  webpackMiddleware: {
    noInfo: true,
  },
});
