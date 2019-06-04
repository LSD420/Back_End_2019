var fs = require('fs');
var zlib = require('zlib');
const express = require('express');
const app = express();
fs.readFile('./lorem.txt');


var readable = fs.createReadStream('lorem.txt');
var writeable = fs.createWriteStream('lorem_copy.txt');
readable.on('data', function(chunk){
    writeable.write(chunk);
});
readable.on('end',function(chunk){
    console.log("Completed Stream");
    writeable.end();
});

// console.log("Completed Stream");
 readable.pipe(writeable);

 var gzip = zlib.createGzip();
 var compressed = fs.createWriteStream('lorem_copy.txt.gz');

 readable.pipe(gzip).pipe(compressed);