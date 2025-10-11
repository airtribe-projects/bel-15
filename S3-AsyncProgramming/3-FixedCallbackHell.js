const asyncFunction1 = (cb) => {
    setTimeout(() => {
        console.log("Async Function 1");            
        cb();
    }, 1000);
};

const asyncFunction2 = (cb) => {
    setTimeout(() => {
        console.log("Async Function 2");
        cb();
    }, 1000);
};

const asyncFunction3 = (cb) => {
    setTimeout(() => {
        console.log("Async Function 3");
        cb();
    }, 1000);
};

const callback3 = () => {
    console.log("All Async Functions Completed");
}

const callback2 = () => {
    asyncFunction3(callback3);
}

const callback1 = () => {
    asyncFunction2(callback2);
}

const main = () => {
    asyncFunction1(callback1);
}

main();