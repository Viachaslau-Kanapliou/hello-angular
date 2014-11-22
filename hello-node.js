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

var getUrlListCallback = function(data){
    data.forEach(function(site){
       console.log(site.toString());
    });
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
 * helloModule.getURLAsStream(process.argv[2],getUrlCallBack,console.error);
 */

/**
 * Lesson 9.
 * helloModule.getURLListAsStream(["http://ya.ru","http://eu.blizzard.com/ru-ru/","http://www.google.by"],getUrlListCallback,console.error);
 * helloModule.getURLListAsStream([process.argv[2],process.argv[3],process.argv[4]],getUrlListCallback,console.error);
 */

/**
 * Lesson 10.

    var net = require("net");
    var strftime = require("strftime");
    var server = net.createServer(function(socktet){

        socktet.end(strftime("%F %H:%M",new Date()));
    });
    server.listen(process.argv[2]);
 */

/**
 * Lesson 11.

    var http = require("http");
    var fs = require("fs");
    var server = http.createServer(function(request,response){
        var stream = fs.createReadStream(process.argv[3],{encoding: "utf8", autoClose: true});
        //var stream = fs.createReadStream("D:\\Epam\\BMB\\hello-angular\\src\\lesson3.in",{encoding: "utf8", autoClose: true});
        stream.pipe(response);
    });
    server.listen(process.argv[2]);
 */

/**
 * Lesson 12.
 *

var http = require("http");
var map = require("through2-map");
var fs = require("fs");

var server = http.createServer(function(req,resp){
    if (req.method == "get") return;

    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(resp);
});
server.listen(process.argv[2]);
 */

/**
 * Lesson 13/
  */
var http = require("http");
var url = require("url");
const parsetime = "/api/parsetime";
const unixtime = "/api/unixtime";
const iso = "iso";

var server = http.createServer(function(req, resp){
    resp.writeHead(200, { 'Content-Type': 'application/json' });

    var curl = url.parse(req.url, true);
    var date = curl.query[iso];
    if (date && curl.pathname == parsetime){
        date = new Date(date);
        date = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        resp.write(JSON.stringify(date));
    }else if (date && curl.pathname == unixtime){
        date = new Date(date);
        date = {
            unixtime:date.getTime()
        }
        resp.write(JSON.stringify(date));
    }else {
        resp.end();
        return;
    }
    resp.end();
});
server.listen(process.argv[2]);