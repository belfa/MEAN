import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritosListComponent } from './components/favoritos-list-component';
import { FavoritosDetailComponent } from './components/favorito-detail-component';
import { FavoritoAddComponent } from './components/favorito-add-component';

const appRoutes: Routes = [
    {path: '',component: FavoritosListComponent},
    {path: 'marcador/:id', component: FavoritosDetailComponent},
    {path: 'crear-marcador', component: FavoritoAddComponent},
    //Los ** deben ir al final sino todas las URL las va a recoger como que no existen.
    {path: '**', component: FavoritosListComponent}
];

export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
