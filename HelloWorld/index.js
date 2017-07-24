/* Hello World! program in Node.js */
"use strict";

//required module
var mHttp = require("http");

//variables
var iPort = 8081;
var sMessage = "Hello World";

//create Http server
var oServer = mHttp.createServer(function(req, res){
    console.log("Request received.");

    res.writeHead(200, {'Content-Type' : 'text-plain'});
    res.write(sMessage);
    res.end();

    console.log("Response sent!");
});
oServer.listen(iPort);

// Console will print server info
console.log('Server running at http://127.0.0.1:/' + iPort + '/');


//sMessage = sMessage + "!";

//console.log(sMessage);