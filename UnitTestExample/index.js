console.log("unit test example started");

var myValidator = require ("./modules/passwordValidator");

var password = "parolasecreta1234";
var valid = myValidator.validPassword(password);

console.log("Your password " + password + " is "+ valid);