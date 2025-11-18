const fs = require('fs');

const readableStream = fs.createReadStream('../input/leviathan.txt', {encoding: 'utf8', highWaterMark: 1*512 });

readableStream.on('data', (chunk) => {
    console.log('$$Received chunk$$:', chunk);
});

readableStream.on('end', () => {
    console.log('#####################')
    console.log('No more data to read.');
});

readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});

