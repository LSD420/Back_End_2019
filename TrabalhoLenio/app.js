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
app.get('/',function(req,res){
    res.send("Nothing to see here");
})
// app.get('/lista', function(req, res){
//     res.send(readFile("./photos.json"));
// })

app.get('/photos/:id', function (req, res) {
    // res.send(readFile("./photos.json"));
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file);
    var id = req.params.id;
    res.send(jsonData['photo' + id]);
})

app.delete('/photos/:id', function (req, res) {
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file);
    var id = req.params.id;
    var del =jsonData['photo' + id];
    if (del) { 
        delete del; 
        res.send("Foto apagada com sucesso");
    } else{
        res.send("Erro");
    }
    
})
app.get('/dislikes/:id', function (req, res) {
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file);
    var id = req.params.id;
    jsonData['photo'+id].dislikes++;
    fs.writeFile("photos.json", JSON.stringify(jsonData, null,4))
    res.send(jsonData['photo'+id]);
})
// app.get('/dislikes/:id', function (req, res) {
//     var file = readFile('./photos.json');
//     var jsonData = JSON.parse(file);
//     var id = req.params.id;
//     jsonData['photo'+id].dislikes++;
//     fs.writeFile("photos.json","utf8", JSON.stringify(jsonData, null,4))
//     res.send(jsonData['photo'+id]);
// })

app.post('/comments/:id', function (req, res) {
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file);
    var id = req.params.id;
    var comentario = req.body.comments;
    var photo= jsonData['photo'+id];
    photo.comments.push(comentario);
    fs.writeFile("photos.json", JSON.stringify(jsonData, null,4),function(err,result) {
        if (err) throw err;
        console.log('Ficheiro guardado');
    });
    res.send(jsonData['photo'+id]);
})


// app.post('/photos', function (req, res) {
//     var file = readFile('./photos.json');
//     var jsonData = JSON.parse(file);
//     var keys = Object.keys(jsonData);
//     var obj_lenght = keys.length;
//     obj_lenght++;
//     jsonData['photos' + obj_lenght] = req.body;
//     res.send(jsonData);
// })