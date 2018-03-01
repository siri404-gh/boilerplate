module.exports = {
  entry: './index.js',
  dist: './dist',
  bundle: 'bundle.js',
  devPort: 4000,
  logs: './*.log',
  htmlTemplateTitle: '',
  htmlTemplateFile: 'index.ejs',
  firebase: {
    htmlTemplateTitle: 'Firebase Title',
  },
  heroku: {
    htmlTemplateTitle: 'Heroku Title',
  },
};
