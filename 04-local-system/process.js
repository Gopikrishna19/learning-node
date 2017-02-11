const {stderr, stdin, stdout} = process;

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', chunk => stdout.write(`:: ${chunk}`));
stdin.on('end', chunk => stderr.write(`:: DONE!`));
