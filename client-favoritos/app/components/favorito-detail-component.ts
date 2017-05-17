import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito';

@Component({
    selector: 'favoritos-detail',
    templateUrl: 'app/views/favoritos-detail.html',
    providers: [FavoritoService]
})

export class FavoritosDetailComponent implements OnInit{
    public favorito: Favorito;
    public errorMessage: any;
    constructor(
        private _favoritoService: FavoritoService,
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(){
        this.getFavorito();
    }

    getFavorito(){
        this._route.params.forEach((params: Params) =>{
            let id = params['id'];

            this._favoritoService.getFavorito(id).subscribe(
                response => {
                    this.favorito = response.favorito;
                    if(!this.favorito)
                    {
                        this._router.navigate(['/']);
                    }
                },
                error => {
                    this.errorMessage = <any>error;

                    if(this.errorMessage != null){
                        console.log(this.errorMessage);
                        alert('Error en al petición');
                    }
                }
            );
        });
    }
}
