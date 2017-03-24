const {evenDoubler} = require('../06-testing/math');

process.on('message', msg => {
  switch (msg.cmd) {
    case 'double':
      evenDoubler(msg.number, (err, answer) => process.send({answer}));
      break;
    case 'done':
      process.exit();
      break;
  }
});
