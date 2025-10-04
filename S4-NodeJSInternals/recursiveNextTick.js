// Example: 
// setTimeout(() => {
//     console.log("Nested Timer")
//     Promise.resolve().then(() => {
//         console.log("Resolved inner promise");   
//     })
// }, 0)

// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)


// console.log("Main script");


// Example: Stack Overflow
// const dummy = () =>  {
//     console.log("Calling Dummy");
//     dummy();
// }

// dummy();



// Example: 
setTimeout(() => { // T1
    console.log("setTimeout inside I/O");
})

function recursiveNextTick() {
    console.log("Inside nextTick" + Math.round(Math.random()*10000))
    process.nextTick(recursiveNextTick);
    
}

recursiveNextTick();

Promise.resolve().then(() => {  //P1
    console.log("Promise then");
})


console.log("Main Script");


