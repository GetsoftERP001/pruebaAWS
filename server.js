const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql');
const conexion = mysql.createConnection({
    host : 'localhost',
    database : 'prueba',
    user : 'desarrollo',
    password : 'Desarrollo54321*',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    conexion.query('SELECT * FROM producto', (error, rows) => {
        if (error){
            throw error;
        }else{
            res.send(rows);
        }
    });
});


app.listen(8080, function () {
    console.log('Se esta ejecutando puerto 8080 :)');
});