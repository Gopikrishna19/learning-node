console.log('is stdout writable? ' + process.stdout.writable);

process.stdout.write('Hello');
process.stdout.write('World');
