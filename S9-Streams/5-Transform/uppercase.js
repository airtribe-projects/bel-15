const { Transform } = require('stream');


const fs = require('fs');

const upperCaseTransform = new Transform({
    
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }

});



const readableStream = fs.createReadStream('../input/leviathan.txt', { encoding: 'utf8' });
const writableStream = fs.createWriteStream('../output/tranformedLeviathan.txt');

readableStream.pipe(upperCaseTransform).pipe(writableStream);


writableStream.on('finish', () => {
    console.log('Finished transforming and writing to file.');
});
