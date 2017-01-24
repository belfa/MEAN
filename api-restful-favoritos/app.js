//Aquí vamos a poner toda la configuración de Express
var express     = require('express');
var bodyParser  = require('body-parser');

var app   = express();
var api   = require('./routes/favorito');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin','*');
    response.header('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    response.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    response.header('Allow','GET, POST, OPTIONS, PUT, DELETE');

    next();
});

app.use('/api',api);


module.exports = app;
