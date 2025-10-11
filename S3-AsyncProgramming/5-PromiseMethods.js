const asyncFunction1 = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async funtion 1 called");            
            reject(1)    
        }, 2000)
   })
}

const asyncFunction2 = (userId) => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async funtion 2 called");
            reject(2)
        }, 1000)
   })
}

const asyncFunction3 = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async funtion 3 called");
            resolve(3);
        }, 5000)
   })
}


const main = () => {
    
    const res = Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    
    // const res = Promise.allSettled([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    
    // const res = Promise.any([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    
    // const res = Promise.race([asyncFunction1(), asyncFunction2(), asyncFunction3()]);


    res
        .then(value => console.log(`Successful Promise: ${value}`))
        .catch(value => console.log(`Rejected Promise: ${value}`))
        .finally(() => console.log("Edge cases handled succesfully"));

    console.log(res);
}

main();