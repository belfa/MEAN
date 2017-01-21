'use strict'

var mongoose = require('mongoose');
var app = require('./app')
var port  = process.env.PORT ||  3678;

mongoose.connect('mongodb://localhost:27017/cursofavoritos',(err,res) => {
  if(err){
    console.log('Error en la conexión a MongodDb');
    throw err;
  }else{
    console.log('Conexión a MongoDB correcta.')
    app.listen(port,() => {
      console.log("API REST FAVORITOS funcionando en http://localhost:"+port);
    });
  }
});
