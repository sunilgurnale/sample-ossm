const http = require('http');

const serverUrl = process.env.SERVER_URL || 'localhost'
const serverPort = process.env.SERVER_PORT || '3000'

const options = {
  hostname: serverUrl,
  port: serverPort,
  path: '/',
  method: 'GET',
  headers: {
    'Connection': 'keep-alive' // Add the keep-alive header
  },
  agent: new http.Agent({
    keepAlive: true, // Enable keep-alive
    maxSockets: 10 // Maximum number of sockets to keep open
  })
};

console.log('Initialising client service');
function sendRequest() {
    console.log('Preparing request')
  const req = http.request(options, (res) => {
    let data = '';

    // A chunk of data has been received.
    res.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received.
    res.on('end', () => {
      console.log('Response from server:');
      console.log(data);
    });
  });
  console.log('Sending request')
  req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
    console.error(e);
  });

  // End the request
  req.end();
}

// Send a request every second
setInterval(sendRequest, 1000);
