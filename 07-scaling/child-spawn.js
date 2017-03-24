const {spawn} = require('child_process');
const dir = spawn(process.env.comspec, ['/c', 'dir', '.']);
const find = spawn(process.env.comspec, ['/c', 'find', '"git"']);

dir.stdout.pipe(find.stdin);
find.stdout.pipe(process.stdout);

dir.stderr.on('data', data => console.log('dir err', data.toString()));
find.stderr.on('data', data => console.log('find err', data.toString()));
