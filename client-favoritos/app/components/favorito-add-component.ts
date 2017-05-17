// Importar Component desde el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'favorito-add',
    templateUrl : 'app/views/favorito-add.html'
})


// Clase del componente donde irán los datos y funcionalidades
export class FavoritoAddComponent implements OnInit{
    public titleSection : string;
    public favorito: Favorito;

    constructor(){
        this.titleSection = "Crear Favorito";
    }

    ngOnInit(){
        this.favorito = new Favorito("","","");
        console.log(this.favorito);
    }

    public onSubmit(){
        console.log(this.favorito);
    }
}
