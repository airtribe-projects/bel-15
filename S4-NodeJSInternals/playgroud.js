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

const net = require('net');


const main = () => {
    console.log('Start');
    const server = net.createServer(() => {});
    server.listen(8080, () => {
        const port = server.address().port;
        const socket = net.createConnection(port);

        socket.on('connect', () => {    // Phase 4 (MacroTask Queue)
            setTimeout(() => {
                console.log('Log from timer');      // Phase 1
            }, 0);
            
            socket.destroy(); // triggers close callback

            // Immediately destroy the server
            server.close();         // 
            
        });

        socket.on('close', () => {          //  Phase 6
            console.log('Log from close callback'); 
        });
    });
}

main()





