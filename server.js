const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => res.send('<h1>hola mundo desde Express</h1'))


app.listen(8080, function () {
    console.log('Se esta ejecutando puerto 8080 :)');
});