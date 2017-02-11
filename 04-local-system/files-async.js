const fs = require('fs');

const outDir = './out';
const newFile = 'new.txt';
const testFile = 'test.txt';

if (fs.existsSync(outDir)) {
  console.log('Directory exists, removing ...');

  const newFilePath = `${outDir}/${newFile}`;

  if (fs.existsSync(newFilePath)) {
    fs.unlinkSync(newFilePath)
  }

  fs.rmdirSync(outDir);
}

fs.mkdir(outDir, () => {

  process.chdir(outDir);

  fs.writeFile(testFile, 'This is test string being written to a test text file ;)', () => {

    fs.rename(testFile, newFile, () => {

      console.log(`File size: ${fs.statSync(newFile).size} bytes`);
      console.log('File contents:');
      console.log(fs.readFileSync(newFile).toString());
    });
  });
});
