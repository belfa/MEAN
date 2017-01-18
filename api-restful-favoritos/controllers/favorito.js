'use strict'

function prueba(request, response){
  var nombre = request.params.nombre || 'SIN NOMBRE';

  response.status(200).send({
                              data:[2,3,4],
                              message: "Hola mundo con NodeJS y EXPRESS - "+nombre
                            });
}

function getFavorito(request, response){
  var favoritoId = request.params.id;

  response.status(200).send({data:favoritoId});
}

function saveFavorito(request, response){
  var params = request.body;

  response.status(200).send({favorito: params});
}

function updateFavorito(request, response){
  var params = request.body;

  response.status(200).send({update: true});
}

function deleteFavorito(request, response){
  var favoritoId = request.params.id;

  response.status(200).send({delete: true, data : favoritoId});
}

module.exports = {
  prueba,
  getFavorito,
  saveFavorito,
  updateFavorito,
  deleteFavorito
}
