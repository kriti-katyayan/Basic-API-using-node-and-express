const http = require('http');  //import syntax
const app =  require('./app');

const port = process.env.PORT || 3000;   //acquiring a port with port number 3000

const server = http.createServer( app );   //creating a server

server.listen(port);    //server listens on port
