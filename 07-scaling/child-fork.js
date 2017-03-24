const {fork} = require('child_process');

const child = fork(__dirname + '/student.js');

child.on('message', msg => {
  console.log('Msg:', msg);
  child.send({cmd: 'done'});
});

child.send({
  cmd: 'double',
  number: 20
});
