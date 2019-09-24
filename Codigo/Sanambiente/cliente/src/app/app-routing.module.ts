import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/body/home/home.component';
import { BodyRegionComponent } from './componentes/body/body-region/body-region.component';
import { ListRegionComponent } from './componentes/body/list-region/list-region.component';
import { BodyCiudadComponent } from './componentes/body/body-ciudad/body-ciudad.component';
import { ListCiudadComponent } from './componentes/body/list-ciudad/list-ciudad.component';

const rutas: Routes = [

  {
    path: '', // En path definimos el nombre de nuestra ruta. Si esta vacia es porque sera la tura inical de la app
    redirectTo: '/home', // Cuando visiten la pagina inicial, se redireccionara a la ruta llamada home. La cual debo crear
    pathMatch: 'full' // Caracteristica que se le asigna solo a la ruta inicial.
  },

  {
    path: 'home', // Nombre de la ruta
    component: HomeComponent // Componente el cual se caragar cuando se utilice la ruta /games
  },
/*----------------------------------- Aqui Creo las rutas region -------------------------------------------*/
  {
    path: 'region',
    redirectTo: '/region',
    pathMatch: 'full'
  },
  {
    path: 'region', // ruta que utiliza el cliente cuando consulta y guarda datos y esta redireccionada
    component: ListRegionComponent // a la interfaz principal de region
  },
  {
    path: 'region/agregar_region', // ruta que utiliza el cliente cuando consulta y guarda datos y esta 
    component: BodyRegionComponent // redireccionada a la interfaz principal de region
  },
  {
    path: 'region/editar_region/:id_region', 
    component: BodyRegionComponent
  },

{
  path: 'ciudad',
  redirectTo: '/ciudad',
  pathMatch: 'full'
},
{
  path: 'ciudad', // ruta que utiliza el cliente cuando consulta y guarda datos y esta redireccionada
  component: ListCiudadComponent // a la interfaz principal de region
},

{
  path: 'ciudad/agregar_ciudad', // ruta que utiliza el cliente cuando consulta y guarda datos y esta 
  component: BodyCiudadComponent // redireccionada a la interfaz principal de region
},
/*----------------------------------- Aqui Creo las rutas ciudad -------------------------------------------
{
  path: 'ciudad/editar_ciudad/:id_ciudad', 
  component: BodyCiudadComponent
}*/
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
const rutas: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'region', component: BodyRegionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

*/