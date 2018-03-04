const webpackConfig = require('./webpack/webpack.dev');

const src = './src';
const karmaFiles = [`${src}/**/*.test.js`];
const karmaPreprocessors = ['webpack', 'coverage'];
const karmaBrowsers = ['PhantomJS'];
const karmaCoverageReporters = ['spec', 'coverage'];
const karmaCoverageDir = './reports/.coverage/';

module.exports = config => config.set({
  basePath: '.',
  frameworks: ['jasmine'],
  files: karmaFiles,
  preprocessors: {
    './**/*.test.js': karmaPreprocessors,
  },
  exclude: [
    './src/**/*.android.test.js',
    './src/**/*.ios.test.js'
  ],
  webpack: webpackConfig,
  reporters: karmaCoverageReporters,
  coverageReporter: {
    reporters: [
      { type: 'lcov', subdir: '.' },
      // { type: 'json', subdir: '.' },
      { type: 'html', subdir: '.' },
      { type: 'text-summary' },
    ],
    type: 'html',
    dir: karmaCoverageDir,
  },
  plugins: [
    'karma-webpack',
    'karma-jasmine',
    'karma-phantomjs-launcher',
    'karma-coverage',
    'karma-spec-reporter'
  ],
  port: 9876,
  colors: true,
  logLevel: config.LOG_ERROR,
  autoWatch: true,
  browsers: karmaBrowsers,
  singleRun: true,
  concurrency: Infinity,
  webpackMiddleware: {
    noInfo: true,
  },
});
