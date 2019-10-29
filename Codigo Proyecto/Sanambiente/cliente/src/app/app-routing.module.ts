import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Body/Home/Home.component';

import { RegionsBodyComponent } from './Components/body/Regions_Body/Regions_Body.component';
import { RegionsListComponent } from './Components/body/Regions_List/Regions_List.component';

import { CitiesBodyComponent } from './Components/body/Cities_Body/Cities_Body.component';
import { CitiesListComponent } from './Components/body/Cities_List/Cities_List.component';

import { RanksBodyComponent } from './Components/Body/Ranks_Body/Ranks_Body.component';
import { RanksListComponent } from './Components/Body/Ranks_List/Ranks_List.component';

import { OrganizationsListComponent } from './Components/Body/Organizations_List/Organizations_List.component';
import { OrganizationsBodyComponent } from './Components/Body/Organizations_Body/Organizations_Body.component';

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

  /*----------------------------------- Aqui Creo las rutas region ----------------------------------------*/
  {
    path: 'region',
    redirectTo: '/region',
    pathMatch: 'full'
  },
  {
    path: 'region', // ruta que utiliza el cliente cuando consulta y guarda datos y esta redireccionada
    component: RegionsListComponent // a la interfaz principal de region
  },
  {
    path: 'region/add_region', // ruta que utiliza el cliente cuando consulta y guarda datos y esta 
    component: RegionsBodyComponent // redireccionada a la interfaz principal de region
  },
  {
    path: 'region/edit_region/:id_region',
    component: RegionsBodyComponent
  },

  /*----------------------------------- Aqui Creo las rutas ciudad --------------------------------------*/
  {
    path: 'city',
    redirectTo: '/city',
    pathMatch: 'full'
  },
  {
    path: 'city', // ruta que utiliza el cliente cuando consulta y guarda datos y esta redireccionada
    component: CitiesListComponent // a la interfaz principal de ciudad
  },
  {
    path: 'city/add_city', // ruta que utiliza el cliente cuando consulta y guarda datos y esta 
    component: CitiesBodyComponent // redireccionada a la interfaz principal de region
  },
  {
    path: 'city/edit_city/:id_ciudad',
    component: CitiesBodyComponent
  },

  /*----------------------------------- Aqui Creo las rutas rango ----------------------------------------*/
  {
    path: 'rank',
    redirectTo: '/rank',
    pathMatch: 'full'
  },
  {
    path: 'rank',
    component: RanksListComponent
  },
  {
    path: 'rank/add_rank',
    component: RanksBodyComponent
  },
  {
    path: 'rank/edit_rank/:id_rank',
    component: RanksBodyComponent
  },

  /*---- Rutas de Organizacion ------*/
  // { path: 'organization', redirectTo: '/organization', pathMatch: 'full' },
  // { path: 'organization', component: OrganizationsListComponent },
  // { path: 'organization/add_organization', component: OrganizationsBodyComponent },
  // { path: 'organization/edit_organization/:id_organizacion', component: OrganizationsBodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }