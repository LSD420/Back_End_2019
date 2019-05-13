const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function readFile(fileName) {
    var file = fs.readFileSync(fileName, 'utf-8'); //Ler o ficheiro
    return file;
}
var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
});



app.get('/', function (req, res) {
    var op = ["GET /photos/:id","DELETE /photos/:id", "GET /dislikes/:id","POST /commments/:id","GET /sort"]
    // res.send("Nothing to see here");
   res.send(op);
})

app.get('/photos/:id', function (req, res) {
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file); //JSON.Parse para transformar os dados em objeto
    var id = req.params.id;
    res.send(jsonData['photo' + id]);
})

app.delete('/photos/:id', function (req, res) {
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file);
    var id = req.params.id;
    var del = jsonData['photo' + id];
    if (del) {
        delete del;
        res.send("Foto apagada com sucesso");
    } else {
        res.send("Erro");
    }

})
app.get('/dislikes/:id', function (req, res) {
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file);
    var id = req.params.id;
    jsonData['photo' + id].dislikes++;
    fs.writeFile("photos.json", JSON.stringify(jsonData, null, 0)) //JSON.stringify para converter objeto para string
    res.send(jsonData['photo' + id]);
})

app.post('/comments/:id', function (req, res) {
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file);
    var id = req.params.id;
    var comentario = req.body.comments;
    var photo = jsonData['photo' + id];
    photo.comments.push(comentario);
    fs.writeFile("photos.json", JSON.stringify(jsonData, null, 0), function (err, result) {
        if (err) throw err;
        console.log('Ficheiro guardado');
    });
    res.send(jsonData['photo' + id]);
})

app.get('/sort', function (req, res) {
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file);
    var guardar = []
    var key = Object.keys(jsonData);
    var obj_length = key.length;
    
    for (var i = 1; i <= obj_length; i++) {
        guardar.push(jsonData['photo' + i].likes)
        guardar.sort()
    }
    var teste = []
    for (i = guardar.length; i >= 0; i--) {
        for (var j = 1; j <= obj_length; j++) {
            if (guardar[i] == jsonData['photo' + j].likes) {
                teste.push('photo'+j,jsonData['photo' + j])
            }
        }
    }
    res.send(teste)
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

// app.get('/sort', function (req, res) {
//     var file = readFile('./photos.json');
//     var jsonData = JSON.parse(file);
//     var likes = jsonData['photo' + 1].likes;

//     res.send(sort(likes));

// })
// function swap(arr, i, j) {
//     var troca = arr[i];
//     arr[i] = arr[j];
//     arr[j] = troca;
// }
// function sort(arr) {
//     var len = arr.length, i, j, stop;
//     for (i = 0; i < len; i++) {
//         for (j = 0, stop = len - i; j < stop; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }


// app.get("/teste", function (req, res) {
//     var file = readFile('./photos.json');
//     var jsonData = JSON.parse(file);
//     var key = Object.keys(jsonData);
//     var obj_lenght = key.length;
// })