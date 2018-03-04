const src = './src';
const outputDir = './_output/';
const dist = `${outputDir}_dist`;
const docs = `${outputDir}_docs`;
const reports = `${outputDir}_reports`;
const coverageDir = `${outputDir}_coverage/`;
const logs = './*.log';

module.exports = {
  src,
  dist,
  docs,
  eslintDir: `./${reports}/.eslint/`,
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
      `./${src}/**/*.android.test.js`,
      `./${src}/**/*.ios.test.js`,
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
    jsonFile: `${reports}/.cucumber/output.json`,
    output: `${reports}/.cucumber/index.html`,
  },
};
