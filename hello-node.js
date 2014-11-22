var helloModule = require("./hello-module");
var dirScanCallback = function (error, list) {
    if (error) throw error;
    list.forEach(function (file) {
        console.log(file);
    });
};
var getUrlCallBack = function(error, data){
    if (error) {
        return console.error(error);
    }
    console.log(data.length);
    console.log(data.toString());
}
/**
 * Lesson 6.
    helloModule.scanDir("D:\\Epam\\BMB\\hello-angular\\src\\", "js", dirScanCallback);
    helloModule.scanDir(process.argv[2], process.argv[3], dirScanCallback);
 */

/**
 * Lesson 7.

    helloModule.getURL("http://ya.ru",console.log,console.error);
    helloModule.getURL(process.argv[2],console.log,console.error);
 */

/**
 * Lesson 8.
 * helloModule.getURLAsStream("http://ya.ru",getUrlCallBack,console.error);
 */
    helloModule.getURLAsStream(process.argv[2],getUrlCallBack,console.error);