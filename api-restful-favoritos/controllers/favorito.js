'use strict'

var Favorito = require('../models/favorito');

function prueba(request, response){
  var nombre = request.params.nombre || 'SIN NOMBRE';

  response.status(200).send({
                              data:[2,3,4],
                              message: "Hola mundo con NodeJS y EXPRESS - "+nombre
                            });
}

function getFavorito(request, response){
  var favoritoId = request.params.id;

  Favorito.findById(favoritoId, function(error, favorito){
    if(error){
      response.status(500).send({message: 'Error al devolver el marcador'});
    }

    if(!favorito){
      response.status(404).send({message: 'No hay marcador'});
    }
    response.status(200).send({favorito});
  });
}

function getFavoritos(request, response){

    Favorito.find({}).sort('-title').exec((err, favoritos) => {
    if(err){
      response.status(500).send({message: 'Error al devolver los marcadores'});
    }

    if(!favoritos) response.status(404).send({message: 'No hay marcadores'});

    response.status(200).send({favoritos});
  });
}


function saveFavorito(request, response){
  var favorito = new Favorito();

  var params = request.body;
  favorito.title = params.title;
  favorito.description = params.description;
  favorito.url = params.url;

  favorito.save((err,favoritoStored) => {
    if(err){
      response.status(500).send({message: 'Error al guardar el marcador'});
    }
    response.status(200).send({favorito : favoritoStored});
  });
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
  getFavoritos,
  saveFavorito,
  updateFavorito,
  deleteFavorito
}
