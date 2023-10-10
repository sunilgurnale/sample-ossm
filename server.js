const http = require('http');
var counter = 0;

const randomNumber = Math.floor(Math.random() * 1000) + 1;

const server = http.createServer((req, res) => {
  // Send a response header with status code 200 and content type text/plain
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Print out the request headers
  console.log('Request Headers:');
  console.log(req.headers);
//   console.log(process.env);
  
  let service_adr = process.env.APP_SERVER_SERVICE_PORT;
  // End the response with a message
  res.end(` ${randomNumber} is responding for its ${counter} request from ${service_adr}`);
  counter++;
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
