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
  var favoritoId = request.params.id;
  var update = request.body;

  Favorito.findByIdAndUpdate(favoritoId, update, (error, favoritoUpdated) => {
    if(error){
      response.status(500).send({message: 'Error al actualizar el marcador'});
    }

    response.status(200).send({favorito: favoritoUpdated});
  });
}

function deleteFavorito(request, response){
  var favoritoId = request.params.id;

  Favorito.findById(favoritoId, function(error, favorito){
    if(error){
      response.status(500).send({message: 'Error al eliminar un marcador'});
    }
    if(!favorito){
      response.status(404).send({message: 'No hay marcador para borrar'});
    }else{
      favorito.remove(error=> {
        if(error){
          response.status(500).send({message:'Error en la petición, no se ha eliminado el marcador'});
        }else{
          response.status(200).send({message:'El marcador se ha eliminado'});
        }
      });
    }

  });
}

module.exports = {
  prueba,
  getFavorito,
  getFavoritos,
  saveFavorito,
  updateFavorito,
  deleteFavorito
}
