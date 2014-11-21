/**
 * Created by Kurash on 21.11.2014.
 */
var fs = require("fs");
var path = require("path");
var scanExtension = null;

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
        fs.readFile(path,"utf8",this.rowCount);

    },
    rowCount: function(error, buf){
        if (error) {
            throw error;
        }
        //last line don't have new line symbol
        var rowCount = buf.split("\n").length-1;
        console.log(rowCount);

    },
    scanDir: function(dir,extension){
        scanExtension = "."+extension;
        fs.readdir(dir, function(err,list){
            if (err) {
                throw err;
            }
            list.forEach(function(file){
                var extension = path.extname(file);
                if (scanExtension == extension){
                    console.log(file);
                }
            });
        });
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

 console.log(process.argv);
 helloModule.readFileAsync("D:\\Epam\\BMB\\hello-angular\\src\\lesson3.in");

 helloModule.readFileAsync(process.argv[2]);
 */

/**
 * Lesson #5
 * Access to context from callback to be solved

 helloModule.scanDir("D:\\Epam\\BMB\\hello-angular\\src\\","js");

 helloModule.scanDir(process.argv[2],process.argv[3]);
 */

