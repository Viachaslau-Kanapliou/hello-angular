/**
 * Created by Kurash on 21.11.2014.
 */
const path = require("path");
const fs = require("fs");
const http = require("http");
const BufferList = require("bl");
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
    },
    getURLListAsStream: function(urllist,callback, errCallback){
        var result = new Array(urllist.length);
        var unprocessedCount = urllist.length;
        urllist.forEach(function(url,index){
            http.get(url, function(response){
                response.setEncoding("utf8");
                response.pipe(new BufferList(function(error,data){
                    if (error) return errCallback(error);
                    result[index] = data;
                    unprocessedCount--;
                    if (unprocessedCount < 1){
                        return callback(result);
                    }
                }));
            }).on("error",errCallback);
        });

    }

};

module.exports = exports;