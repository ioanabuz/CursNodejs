/* Hello World! program in Node.js */
"use strict";

//required module
var mHttp = require("http");

//variables
var iPort = 8081;
var sMessage = "Hello World";

var oResponse = {
    "returnCode" : "1",
    "returnMessage" : "Everything ok", 
    "returnData" : null
}

//create Http server
var oServer = mHttp.createServer(function(req, res){
    console.log("Request received.");

    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.write(JSON.stringify(oResponse));
    res.end();

    console.log("Response sent!");
});
oServer.listen(iPort);

// Console will print server info
console.log('Server running at http://127.0.0.1:/' + iPort + '/');


//sMessage = sMessage + "!";

//console.log(sMessage);