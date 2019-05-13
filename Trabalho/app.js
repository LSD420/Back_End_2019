const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function readFile(fileName) {
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}

var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
});

app.get('/photos/:id', function (req, res) {
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file);
    var id = req.params.id;
    res.send(jsonData['Photo' + id]);
})

app.delete('/photos/:id', function (req, res) {
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file);
    var id = req.params.id;
    if (jsonData['Photo' + id]) { 
        delete jsonData['Photo' + id]; 
        res.send("Foto eliminada");
    } else{
        res.send("Erro: A foto nao foi encontrada");
    }
    
})
app.get('/dislikes/:id', function (req, res) {
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file);
    var id = req.params.id;
    jsonData['Photo'+id].dislikes++;
    fs.writeFile("photos.json", JSON.stringify(jsonData))
    res.send(jsonData['Photo'+id]);
})

app.post('/comments/:id', function (req, res) {
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file);
    var id = req.params.id;
    var comentario = req.body.comments;
    var photo= jsonData['Photo'+id];
    photo.comments.push(comentario);
    fs.writeFile("photos.json", JSON.stringify(jsonData))
    res.send(jsonData['Photo'+id]);
})
app.get('/ordenar', function (req, res) {
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file);
    var like = [];
    var key = Object.keys(jsonData);
    var obj_length = key.length;
    
    for (var i = 1; i <= obj_length; i++) {
        like.push(jsonData['Photo' + i].likes)
        like.sort()
    }
    var array = [];
    for (i = like.length; i >= 0; i--) {
        for (var j = 1; j <= obj_length; j++) {
            if (like[i] == jsonData['Photo' + j].likes) {
                teste.push('Photo'+j,jsonData['Photo' + j])
            }
        }
    }
    res.send(array)
})