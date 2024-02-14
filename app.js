/*
 * @Author: Someone 
 * @Email: someone@example.com
 * @Date: 2024-02-07 21:50:06 
 * @Last Modified by: Someone
 * @Last Modified time: 2024-02-08 07:39:02
 * @Description: file:///Users/aj/Desktop/Udemy-Complete-Web-Dev/Projects/NodeJS-Online-File-Explorer/app.js
 */

// require node modules
const http = require("http");

// file imports
const respond = require("./lib/respond.js");

// connection settings
const port = process.env.PORT || 3000;

// create server
const server = http.createServer(respond);

// listen to client requests on the specific port
server.listen(port, () => {
  console.log(`Listening on port:\t ${port}`);
});
