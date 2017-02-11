const fs = require('fs');
const request = require('request');

const dir = './out';
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

const source = request('http://www.google.com');
const destination = fs.createWriteStream(`${dir}/google.html`);

source.pipe(destination);
