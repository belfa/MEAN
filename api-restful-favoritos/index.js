'use strict'

var app = require('./app')
var port  = process.env.PORT ||  3678;


app.listen(port,() => {
  console.log("API REST FAVORITOS funcionando en http://localhost:"+port);
});
