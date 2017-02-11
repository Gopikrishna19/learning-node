const {stderr, stdin, stdout} = process;

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', chunk => stdout.write(`:: ${chunk}`));
stdin.on('end', () => stderr.write(':: DONE!'));
stdin.on('SIGTERM', () => stderr.write(':: TERMINATING!'));

console.log(`Running process #${process.pid}`);
