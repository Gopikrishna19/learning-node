const request = require('request');

const source = request('http://www.google.com');

source.on('data', chunk => {
  console.log(`:: ${chunk}`);
});

source.on('end', () => {
  console.log(`:: DONE!`);
});
