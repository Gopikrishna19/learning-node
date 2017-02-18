const fs = require('fs');
const http = require('http');
const socketio = require('socket.io');

const handler = (req, res) =>
  fs.readFile(`${__dirname}/index.html`, (err, data) => {

    if (err) {
      res.writeHead(404);
      res.end();
    } else {
      res.end(data);
    }
  });

const server = http.createServer(handler);
const io = socketio.listen(server);

io.sockets.on('connection', socket => {

  setInterval(() => {
    const timestamp = Date.now();

    console.log(`Emitted: ${timestamp}`);
    socket.emit('timer', timestamp);
  }, 2000);

  socket.on('submit', data => console.log(`Submitted: ${data}`));
});

server.listen(8080);

console.log('Server Running');
