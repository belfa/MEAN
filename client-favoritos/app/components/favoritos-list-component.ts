import {Component} from '@angular/core';

@Component({
    selector: 'favoritos-list',
    templateUrl: 'app/views/favoritos-list.html'
})

export class FavoritosListComponent {
    public title : string;
    public favoritos: Array<string>;
    public favoritosVisibles: boolean;
    public color: string;

    constructor(){
        this.title = 'Listado de marcadores: ';
        this.favoritos = ['wwww.google.es','youtube.com','twitter.com'];
        this.favoritosVisibles = true;
        this.color = 'red';
    }

    public showFavoritos(){
        this.favoritosVisibles = true;
    }

    public hideFavoritos(){
        this.favoritosVisibles = false;
    }

    public changeColor(){
        console.log(this.color);
    }
}
