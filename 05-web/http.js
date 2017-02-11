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
