const express = require('express')
const app = express()
const port = 3306

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
});
connection.connect()
connection.query('SELECT 1 + 1 AS Solution', function (err, rows, fields) {
    if (err) throw err
    console.log('The solution is: ', rows[0].Solution)
})

app.post(`/Persons`, function (req, res) {
    var query = "INSERT INTO persons set ?";
    var values = req.body;
    connection.query(query, values, function (err, result, fields) {
        if (err) {
            console.log("error: ", err);
            res.send(err);
        }
        else {
            console.log(result.insertId);
            res.end("" + result.insertId);
        }
    });
})
app.get('/Persons', function (req,res) {
    var query = 'SELECT * FROM persons';
    connection.query(query, function (err, result, fields) {
        if (err) throw err;
        // if (err) res.send(err);
        res.send(result);
    });
});
app.delete(`/Persons`, function (req, res) {
    var query = "DELETE FROM persons WHERE Id = ";
    var values = req.body;
    connection.query(query + values, function (err, result, fields) {
        if (err) {
            console.log("error: ", err);
            res.send(err);
        }
        // if (err) throw err;
        else {
            res.end(result);
        }
    });
})



// connection.end()