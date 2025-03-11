/*
    1. Place a console log to test

*/
const sayName = require("./modules/sayName");
const { sayHello, sayGoodBye } = require("./modules/greeting");
/*
    2. Use the require() function to grab sayName from the modules
*/
sayName("Colin");
/*
    3. Test the module function sayName
*/
sayHello("Daniel");
sayGoodBye("Ann");
/*
    4. Use the require() function to grab { sayHello, sayGoodBye } from the modules
*/

/*
    5. Test the module functions sayHello and sayGoodBye
*/