const net = require('net');

// Connect to the chat server
const client = net.createConnection({ port: 8080 }, () => {
  console.log('Connected to chat server');
  process.stdin.pipe(client); // Pipe stdin to the server/stream
});

client.on('data', (data) => {
  console.log(`Received: ${data}`);
});





// Housekeeping functions
client.on('end', () => {
  console.log('Disconnected from chat server');
});

client.on('error', (err) => {
  console.error('Client error:', err);
});

process.stdin.on('end', () => {
  client.end();
});
