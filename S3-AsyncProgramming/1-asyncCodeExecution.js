// Example 1:
// console.log('Start');
// console.log('In between');
// console.log('End');

// Example 2:
// const inBetween = () => {
//     console.log('In between');
// }

// console.log('Start');
// setTimeout(inBetween, 0);  
// console.log('End');


// Example 3

const inBetween = () => {
    console.log('In between');
}

console.log('Start');
setTimeout(inBetween, 1000);  
console.log('End');
