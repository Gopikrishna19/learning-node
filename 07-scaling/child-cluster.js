const cluster = require('cluster');
const http = require('http');
const workersCount = 4;

function sleepFor(sleepDuration) {
  const now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}

if (cluster.isMaster) {
  let request = 0;

  for (let i = 0; i < workersCount; ++i) {
    cluster.fork();
  }

  cluster.on('fork', worker => console.log('master:', 'fork event from worker', worker.id));
  cluster.on('online', worker => console.log('master:', 'online event from worker', worker.id));
  cluster.on('listening', (worker, address) => console.log(
    'master:', 'listening event from worker', worker.id,
    'process', worker.process.pid,
    'address', address.address,
    'port', address.port
  ));
  cluster.on('exit', (worker, code, signal) => console.log(
    'master:', 'exit event from worker', worker.id,
    'code', code,
    'signal', signal
  ));
  cluster.on('message', () => console.log('Serving request', request += 1));

} else {

  console.log('worker: worker #', cluster.worker.id, 'ready!');

  let count = 0;

  http.createServer((req, res) => {

    res.writeHead(200);

    count += 1;

    console.log('Worker #', cluster.worker.id);
    process.send('message');

    sleepFor(Math.random() * 1000);

    res.end([
      'Hello world from worker #', cluster.worker.id,
      'pid', cluster.worker.process.pid,
      'count', count
    ].join(' '));

  }).listen(8080);

}

