// Example 1: 
// const main = () => {
   
//     setTimeout(() => {  // T1
//         console.log("Main Timer")
//     }, 0);

//     process.nextTick(() => console.log('process.nextTick')); // NT

//     console.log("Main script");
// }

// Example 2: Next Tick and Promises
// const main = () => {

//     Promise.resolve().then(() => { // P1
//         console.log("Promise Callback");   
//     })

//     setTimeout(() => {  // T1
//         console.log("Main Timer")
//     }, 0);


//     process.nextTick(() => console.log('process.nextTick')); // NT

//     console.log("Main script");
// }


// Example 3:
setTimeout(() => {
    console.log("Main Timer")
}, 0)


process.nextTick(() => console.log('process.nextTick 1'));

Promise.resolve().then(() => {
    console.log("Promise Callback 1");   

})

process.nextTick(() => console.log('process.nextTick 2'));

Promise.resolve().then(() => {
    console.log("Promise Callback 2");   

})

console.log("Main script");
// main();