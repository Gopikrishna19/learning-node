const http = require('http');

(() => {

  /**
   * request with simple url
   */

  const request = http.request('http://www.google.com', response => {
    console.log(response.statusCode);
    response.pipe(process.stdout);
  });

  request.end();

})();

(() => {

  /**
   * request with custom options
   *
   * NOTE: specifying manual options will not follow redirects like 301 (try using mail.google.com)
   */

  const options = {
    host: 'www.google.com',
    port: 80,
    method: 'GET',
    path: '/'
  };

  const request = http.request(options, response => {
    console.log(response.statusCode);
    response.pipe(process.stdout);
  });

  request.end();

})();
