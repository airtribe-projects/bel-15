const fs =  require('fs');  // Import 

const sqrt = require('math-sqrt');

const filePath = "../input/small.txt";

console.log(`${Date.now()} Started Reading File`);

const data = fs.readFile(filePath, 'utf-8', (err, data) => {
    console.log("File reading complete. Length of file is ", data.length );
}); 



console.log(`${Date.now()} Finished Reading file`);


const tmp = [];
for (let i=0; i<1000000; i++) {
    tmp.push(i);
}

console.log("Pushed all the numbers to tmp", tmp.length);

