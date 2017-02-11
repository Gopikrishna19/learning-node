const fs = require('fs');
const request = require('request');

const dir = './out';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const source = request('http://www.google.com');

(() => {

  /**
   * from read stream (request) to write stream (stdout)
   */

  const destination = process.stdout;

  source.pipe(destination);

})();

(() => {

  /**
   * from read stream (request) to write stream (file)
   */

  const destination = fs.createWriteStream(`${dir}/google.html`);

  source.pipe(destination);

})();

(() => {

  /**
   * from read stream (request) to read-write stream (zlib) to write stream (file)
   */

  const zlib = require('zlib');

  const gzipper = zlib.createGzip();
  const destination = fs.createWriteStream(`${dir}/google.html.gz`);

  source.pipe(gzipper).pipe(destination);

})();
