const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var uui = uuid(); 

const port = 8080;
const fs = require('fs');

function readFile(fileName){
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}

app.get('/', function(req, res){
    res.send("Hello World!");
})
app.get('/users', function(req, res){
    res.send(readFile("./persons.json"));
})
app.post('/users',function(req,res){
    var file = readFile('./persons.json');
    var jsonData = JSON.parse(file);
    var keys = Object.keys(jsonData);
    var obj_lenght = keys.length;
    obj_lenght++;
    jsonData['person' + obj_lenght] = req.body;
    res.send(jsonData);
})

app.delete('/users/:id',function(req,res){
    var file = readFile('./persons.json');
    var jsonData = JSON.parse(file);
    var id = req.params.id;
    delete jsonData['person'+id];
    res.send(jsonData);
})
app.get('/users/:id',function(req,res){
    var file = readFile('./persons.json');
    var jsonData = JSON.parse(file);
    var id = req.params.id;
    res.send(jsonData['person'+id]);
    
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))