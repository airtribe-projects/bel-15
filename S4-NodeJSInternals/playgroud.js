/*
In Task Queue also there are several parts
1. Timers Phase: setTimeout & setInterval, any callbacks originating from the timers
2. Pending Callback Phase: 
    TCP errors, DNS errors, deferred network callbacks (Low level system errors)
3. Idle / Prepare phase =>  Internally used by the system to maintain event loop phases. Not generally used by developers
4. Poll Phase: 
    - All new i/O events and related callbacks like DB Calls, FS call, socket call
5. Check phase: 
    - for setImmediate callbacks
6. Close phase
    - Socket handling
    - cleanup like closing database
*/

const fs = require('fs');


const main = () => {

    const fsWriteCallback = (err, res) => {
        
        if (err) throw err;
        console.log(res);
  
        setTimeout(() => {                           // Phase 1: Timer Phase
            console.log('Log from timer');
        }, 0);

        fs.unlink('temp.txt', (err, data) => {           // Phase 6: Close phase
            if (err) throw err;
            console.log('Log from close callback');
        });

        Promise.resolve().then(() => {
            console.log("Log from promise");
        })
    }


    
    fs.writeFile('temp.txt', 'Hello', fsWriteCallback);
}

main();






