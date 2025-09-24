
// Library code
const asyncFunction = (cb) => {
    setTimeout(() => {
        console.log('In Between');
        cb({course:1, name:"JS"});
        cb();
        cb();
    }, 1000);
}


// Developer code
const main = () => {
    console.log('Start');
    asyncFunction((data) => {
        console.log('End');
        console.log(data);
    });
    
}

main();

// Where is the callback defined? Main, Developer owns the callback
// When is the callback executed? Library code, asyncFunction owns the execution of the callback