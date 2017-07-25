console.log("module example started");

var myModule = require ("./Modules/mymodule.js");

myModule.start();

console.log("Config.config1 = " + myModule.config.conf1)