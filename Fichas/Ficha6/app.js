const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port);
    fs.open("log.txt", 'a', function (err, fd) {
        console.log(fd);
    });
});

function writeLog(request, response) {
    var log = request.path + ", " + request.method + ", " + new Date() + "\n";
    fs.appendFile('log.txt', log, function (err) {
        if (err) throw err;
        console.log('saved!');
    });
}

app.get('/', function (request, response) {
    writeLog(request, response);
    response.writeHead(200, { 'content-Type': 'text/plain' });
    response.end("Hello World");
});


app.get('/index', function (request, response) {
    writeLog(request, response);
    response.writeHead(200, { 'content-Type': 'text/html' });
    var html = fs.readFileSync("index.html", "utf-8");
    html = html.replace("{Template}", new Date());
    response.end(html);
});

app.get('/user/:name', function (request, response) {
    writeLog(request, response);
    response.writeHead(200, { 'content-Type': 'text/html' });
    var html = fs.readFileSync("index.html", "utf-8");
    var name = request.params.name;
    html = html.replace("{Template}", "Olá " + name + "!");
    response.end(html);
});

app.get('/log', function (request, response) {
    writeLog(request, response);
    response.writeHead(200, { 'content-Type': 'text/plain' });
    var log = fs.readFileSync("log.txt", "utf-8");
    response.end(log);
});

app.get('/download', function (request, response) {
    var ficheiro = ('log.txt');
    response.download(ficheiro);
});

app.get('/del', function (request, response) {
    var ficheiro = ('log.txt');
    fs.unlinkSync(ficheiro);
});