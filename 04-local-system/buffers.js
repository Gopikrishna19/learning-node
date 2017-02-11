const buffer = new Buffer('Hello');

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toString('base64'));
console.log(buffer.toString('hex'));
console.log(buffer.toString('utf8', 0, 2));
console.log(buffer.toString('utf16le'));
