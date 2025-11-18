const autocannon = require('autocannon');

const instance = autocannon({
    url: 'http://localhost:8080',
    connections: 10,
    pipelining: 1,
    duration: 10
}, console.log);

// Track progress
autocannon.track(instance, { renderProgressBar: true });

