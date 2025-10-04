// Async Await



function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async funtion 2 called");            
            reject(2)    
        }, 2000)
   })
}


const asyncFunction3 = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async funtion 3 called");            
            resolve(3)    
        }, 2000)
   })
}


const asyncFunction1 = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async funtion 1 called");            
            resolve(1)    
        }, 2000)
   })
}

const asyncFunction4 = () => {
    setTimeout(() => {
        console.log("Async funtion 1 called");            
    }, 2000)
 
}

const sum = async (a, b) => a + b;

const main = async () => {
    const r1 = await asyncFunction1();
    const r2 = await asyncFunction2();
    const r3 = await asyncFunction3();
    console.log(r1,r2,r3)
    
    // const res = await sum(4, 5);
    
    // console.log(res);
}


main();