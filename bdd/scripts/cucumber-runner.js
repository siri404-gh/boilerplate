#!/usr/bin/env node
const childProcess = require('child_process');

const configFile = `../conf/${process.env.CONFIG_FILE || 'single'}.conf.js`;
const { config: { config } } = require(configFile);

process.argv[0] = 'node';
process.argv[1] = './node_modules/.bin/cucumber-js';

for (const i in config.capabilities) {
  if (config.capabilities[i]) {
    const env = Object.create(process.env);
    env.TASK_ID = i.toString();
    const p = childProcess.spawn('/usr/bin/env', process.argv, { env });
    p.stdout.pipe(process.stdout);
  }
}
