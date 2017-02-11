const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {

  const httpJs = '/http.js';

  res.writeHead(200, {'Content-Type': 'text/plain'});

  if(req.url === httpJs) {
    fs.createReadStream(__dirname + httpJs).pipe(res);
  } else {
    res.end('Try requesting http.js');
  }
}).listen(8080);

console.log('Server Running');
