const os = require('os'); // built in
const print = require('./print-info'); // file
const timestamp = require('timestamp'); // npm module

const toMB = bytes => (bytes / 1024 / 1024).toFixed(2);

print(timestamp('YYYY:MM:DD HH:mm:ss'), {
  hostname: os.hostname(),
  loadavg: os.loadavg(),
  freemem: toMB(os.freemem()),
  totalmem: toMB(os.totalmem())
});
