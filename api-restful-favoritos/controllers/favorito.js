'use strict'

function prueba(request, response){
  var nombre = request.params.nombre || 'SIN NOMBRE';

  response.status(200).send({
                              data:[2,3,4],
                              message: "Hola mundo con NodeJS y EXPRESS - "+nombre
                            });
}

module.exports = {
  prueba
}
