var helloModule = require("./hello-module");
var dirScanCallback = function (error, list) {
    if (error) throw error;
    list.forEach(function (file) {
        console.log(file);
    });
};
/**
 * Lesson 6.
    helloModule.scanDir("D:\\Epam\\BMB\\hello-angular\\src\\", "js", dirScanCallback);
 */
    helloModule.scanDir(process.argv[2], process.argv[3], dirScanCallback);