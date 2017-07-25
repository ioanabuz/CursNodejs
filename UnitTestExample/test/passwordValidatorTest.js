
var chai = require(chai); 
var passwordValidator = require ("../module/passwordValidator");

//module level
describe("passwordValidator", function() {

    // function level
   describe(".validPassword(password)", function() {
    

    // function test 1
       it("should have minimum 8 chars length", function(){
           //Test Goes Here
            var wrongPass = "1234567";
            var valid = passwordValidator.validPassword(wrongPass);

            //chai check wrong
            chai.expect(valid).to.be(false);

            //test with good password
            var goodPass = "12345678";
            var valid2 = passwordValidator.validPassword(goodPass);
            
            //chai check good
            chai.expect(valid).to.be(true);

       });
   });
});
