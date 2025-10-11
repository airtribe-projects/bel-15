// Why Promises? 
// - Clean and manageble async code
// - Avoid callbck hell


// Promise: Pending 
// Give me response
// Error out

const businesLogic = true;
const errorLogic = false;
const asyncFunction1 = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async funtion 1 called");            
            
            if (businesLogic) {
                resolve()
                return;
                throw new Error("Something is not working");
                
            }
            
            
            if (errorLogic) {
                reject();
                return;
            }
            

            reject()    
        }, 1000)
   })
}

const asyncFunction2 = (userId) => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async funtion 2 called");
            reject("Async function 2 errored out");
        }, 1000)
   })
}

const asyncFunction3 = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async funtion 3 called");
            resolve();
        }, 1000)
   })
}






const main = () => {
    
    // asyncFunction1()
    //     .then(() => {
    //         asyncFunction2()
    //             .then(()=> {
    //                 asyncFunction3()
    //                     .then(() => console.log("All async function code executed succesfully"));
    //             })
    //     })

    // DB entry ==> userId
    // Trigger an email. Customize template where I need userId


    // asyncFunction1()
    //     .then((userId) => {
    //         asyncFunction2(userId);
    //     })
    //     .catch(e => console.log(e))
    //     .then(asyncFunction3)
    //     .then(() => console.log("All async function code executed succesfully"))
    //     .catch(e => console.log(e));

 
    // Promise Chaining
 
    // const res = asyncFunction1()
    //     .then(() => console.log("Promise resolved"));

    // console.log(res);

    asyncFunction1()
        .then((res) => console.log("Executed succesfully", res))
        .catch(() => console.log("There was an error"));

}

main();

// 5 sec IOTime: 4.5 sec, CPUTime: 0.5 Sec


// Single core system
// Sync Execution: Your thread would be blocked for 5 sec ==> 0.2 req / sec
// Async Code: Thread would be blocked for 0.5 sec ==>  2 req/sec
