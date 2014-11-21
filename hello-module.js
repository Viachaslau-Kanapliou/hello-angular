/**
 * Created by Kurash on 21.11.2014.
 */
var path = require("path");
var fs = require("fs");
module.exports =  function(dir,extension,callback){
    fs.readdir(dir, function(err,list){
        if (err) {
            return callback(err);
        }

        var scanExtension = "." + extension;
        list = list.filter(function(file){
            return scanExtension == path.extname(file);
        });
        callback(null, list);
    });
};
