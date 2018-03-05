const src = './src';
const outputDir = './_output/';
const dist = `${outputDir}_dist/`;
const docs = `${outputDir}_docs/`;
const reports = `${outputDir}_reports/`;
const coverageDir = `${reports}_coverage/`;
const eslintDir = `./${reports}/_eslint/`;
const bddDir = `${reports}_cucumber/`;
const pa11yDir = `${reports}_pa11y/`;
const sitespeedDir = `${reports}_sitespeed/`;
const logs = './*.log';

module.exports = {
  src,
  dist,
  docs,
  eslintDir,
  bddDir,
  pa11yDir,
  sitespeedDir,
  port: process.env.NODE_ENV || 5000,
  karma: {
    browsers: ['PhantomJS'],
    coverageDir,
    coverageReporter: {
      reporters: [
        // { type: 'json', subdir: '.' },
        { type: 'lcov', subdir: '.' },
        { type: 'html', subdir: '.' },
        { type: 'text-summary' },
      ],
      type: 'html',
      dir: coverageDir,
    },
    reporters: ['spec', 'coverage'],
    exclude: [
      `./${src}/components/mobile/**`,
    ],
    files: [`${src}/**/*.test.js`],
    frameworks: ['jasmine'],
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter',
    ],
    preprocessors: {
      './**/*.test.js': ['webpack', 'coverage'],
    },
  },
  webpack: {
    entry: './index.js',
    dist,
    logs,
    outputFileName: '[name].bundle.js',
    resolveExtensions: ['.js', '.json', '.jsx'],
    sourceMapType: 'inline-source-map',
    bundle: 'bundle.js',
    host: 'localhost',
    port: 5000,
    publicPath: '/',
    cleanFolders: [logs, dist, reports],
    title: 'Title',
    template: 'templates/index.ejs',
    fileName: '.manifest.json',
  },
  esdoc: {
    title: 'bartrr',
    description: '',
    repository: '',
    site: '',
    twitter: '',
    image: '',
    interfaces: ['describe', 'it', 'context', 'suite', 'test'],
  },
  cucumber: {
    jsonFile: `${bddDir}output.json`,
    output: `${bddDir}index.html`,
  },
};
