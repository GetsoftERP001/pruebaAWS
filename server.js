const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('<h1>hola mundo desde Express</h1'))

app.listen(8080);
console.log('Se esta ejecutando puerto 8080 :)');