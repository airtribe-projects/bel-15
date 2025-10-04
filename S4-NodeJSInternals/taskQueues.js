// Task Queue: T1


// Example 1: Timer
// const main = () => {

//     setTimeout(() => {  // T1
//         console.log("Main Timer")
//     }, 0);

//     console.log("Main script");
// }


// main();


// Example 2: Immediately resolved promise
// const main = () => {

//     Promise.resolve().then(() => {
//         console.log("Promise Callback");   
//     })

//     console.log("Main script");
// }


// main();



// Example 3: Promise and Timer
// const main = () => {
   
//     setTimeout(() => {  // T1
//         console.log("Main Timer")
//     }, 0);


//     Promise.resolve().then(() => { // P1
//         console.log("Promise Callback");   
//     })

//     console.log("Main script");
// }


// main();


// Example 4: For Loop 

// for (let i=0; i< 10; i++) {
//     setTimeout(() => { //T{i}
//         console.log(`Main Timer ${i}`)
//     }, 0)


//     Promise.resolve().then(() => { // P{i}
//         console.log(`Promise Callback ${i}`);   
//     });
// }


// Example 5: 


setTimeout(() => { // T1
    console.log("Main Timer")
}, 0)


Promise.resolve().then(() => { // P1
    console.log("Promise Callback");   
    Promise.resolve().then(() => { // P2
        console.log("Resolved inner promise");   
    })
})

console.log("Main script");


