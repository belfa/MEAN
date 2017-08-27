"use strict";
var router_1 = require("@angular/router");
var favoritos_list_component_1 = require("./components/favoritos-list-component");
var favorito_detail_component_1 = require("./components/favorito-detail-component");
var favorito_add_component_1 = require("./components/favorito-add-component");
var favorito_edit_component_1 = require("./components/favorito-edit-component");
var appRoutes = [
    { path: '', component: favoritos_list_component_1.FavoritosListComponent },
    { path: 'marcador/:id', component: favorito_detail_component_1.FavoritosDetailComponent },
    { path: 'crear-marcador', component: favorito_add_component_1.FavoritoAddComponent },
    { path: 'editar-marcador/:id', component: favorito_edit_component_1.FavoritoEditComponent },
    //Los ** deben ir al final sino todas las URL las va a recoger como que no existen.
    { path: '**', component: favoritos_list_component_1.FavoritosListComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map