exports.config = {
  user: 'BROWSERSTACK_USER',
  key: 'BROWSERSTACK_KEY',
  server: 'hub-cloud.browserstack.com',

  commonCapabilities: {
    name: 'parallel_test',
    build: 'cucumber-js-browserstack',
  },

  capabilities: [{
    browserName: 'chrome',
  }, {
    browserName: 'firefox',
  }, {
    browserName: 'safari',
  }, {
    browserName: 'internet explorer',
  }],
};

// Code to support common capabilities
exports.config.capabilities.forEach((caps) => {
  for (const i in exports.config.commonCapabilities) {
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
  }
});
