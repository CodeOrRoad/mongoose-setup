
var app = require('../app');
var http = require('http');
/*
 * Include your own packages
*/

/*
 * Create server as your framework expects (express)
 */

var server = http.createServer(app);

server.listen(9696);

server.on('error', () => {
	// Handle error here
});

server.on('listening', () => {
	console.log("Server Listening");
});

/*
 * Do your other tasks like error handling
*/