var fs = require("fs");

var helloModule = {
    messages: {
        HELLO: "HELLO WORLD"
    },
    sayHello: function () {
        console.log(this.messages.HELLO);
    },
    sumArguments: function(numbers, startIndex){
        var sum = 0;
        for (var i =startIndex; i< numbers.length; i++) {
            sum +=Number(numbers[i]);
        }
        console.log(sum);
    },
    readFile: function(path){
        var buf = fs.readFileSync(path,"utf8");
        this.rowCount(false,buf)
    },
    readFileAsync: function(path){
        fs.readFile(path,"utf8",this.readFileAsync);

    },
    rowCount: function(error, buf){
        if (error) {
            throw error;
        }
        //last line don't have new line symbol
        var rowCount = buf.split("\n").length-1;
        console.log(rowCount);

    }
};

/**
 * Lesson #1

    helloModule.sayHello();
*/

/**
 * Lesson #2
 * process.argv - external data

    helloModule.sumArguments(process.argv, 2);
 */

/**
 * Lesson #3

    helloModule.readFile(process.argv[2]);
*/

/**
 * Lesson #4
 */
helloModule.readFileAsync(process.argv[2]);
