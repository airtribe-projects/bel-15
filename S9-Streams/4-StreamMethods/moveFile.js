const fs = require('fs');

const readableStream = fs.createReadStream('../input/leviathan.txt', { highWaterMark: 16 * 1024 }); 

const writableStream = fs.createWriteStream('../output/backpressureFile.txt', { highWaterMark: 64 * 1024 }); // 16 KB

readableStream.on('data', (chunk) => {
  console.log(`Read ${chunk.length} bytes`);
  const canWrite = writableStream.write(chunk);

  if (!canWrite) {
    console.log("Writeable stream full. Pausing for a moment");
    readableStream.pause()
  }

//   console.log("Has written:", canWrite)

});

writableStream.on('drain', () => {
    console.log("Writeable stream empty. Resuming readable stream");
    readableStream.resume();
})

// Housekeeping methods
readableStream.on('end', () => {
  console.log('Readable stream ended');
  writableStream.end();
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});

