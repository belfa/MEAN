'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app   = express();
var port  = process.env.PORT ||  3678;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/prueba/:nombre?', (request, response) => {
  var nombre = request.params.nombre || 'SIN NOMBRE';

  response.status(200).send({
                              data:[2,3,4],
                              message: "Hola mundo con NodeJS y EXPRESS - "+nombre
                            });
});

app.listen(port,() => {
  console.log("API REST FAVORITOS funcionando en http://localhost:"+port);
});
