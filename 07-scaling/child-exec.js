const {exec} = require('child_process');

const child = exec('dir', (err, stdout, stderr) => {
  if (err) {
    console.log('Error:', stderr);
  } else {
    console.log('Output is:', stdout);
  }
});

console.log(child.pid);
