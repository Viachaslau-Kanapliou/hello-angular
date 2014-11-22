/**
 * Created by Kurash on 21.11.2014.
 */
var path = require("path");
var fs = require("fs");
var http = require("http");
var BufferList = require("bl");
var exports = {
    scanDir: function (dir, extension, callback) {
        fs.readdir(dir, function (err, list) {
            if (err) {
                return callback(err);
            }

            var scanExtension = "." + extension;
            list = list.filter(function (file) {
                return scanExtension == path.extname(file);
            });
            callback(null, list);
        });
    },

    getURL: function(url, callback, errCallback){
        http.get(url, function(response){
            response.setEncoding("utf8");
            response.on("data",callback);
        }).on("error",errCallback);
    },

    getURLAsStream: function(url, callback, errCallback){
        http.get(url, function(response){
            response.setEncoding("utf8");
            response.pipe(BufferList(callback))
        }).on("error",errCallback);
    }
};

module.exports = exports;