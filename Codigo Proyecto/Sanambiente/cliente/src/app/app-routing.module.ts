/*Clase que contiene las rutas del lado del cliente que empleara cada vista */

import { NgModule } from '@angular/core'; // Angular lo importa por defecto
import { Routes, RouterModule } from '@angular/router'; // Componente de angular para manejar rutas

/* Importo los componentes a los cuales se direccionaran las rutas creadas para el home */
import { HomeComponent } from './Components/Body/Home/Home.component'; // Importo 

/* Importo los componentes a los cuales se direccionaran las rutas creadas para region */
import { RegionsBodyComponent } from './Components/body/Regions_Body/Regions_Body.component';
import { RegionsListComponent } from './Components/body/Regions_List/Regions_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para ciudad */
import { CitiesBodyComponent } from './Components/body/Cities_Body/Cities_Body.component';
import { CitiesListComponent } from './Components/body/Cities_List/Cities_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para rango */
import { RanksBodyComponent } from './Components/Body/Ranks_Body/Ranks_Body.component';
import { RanksListComponent } from './Components/Body/Ranks_List/Ranks_List.component';

/* Constante de tipo Route que contendra las rutas */
const rutas: Routes = [

  /* --------------------------------------Rutas de la vista home--------------------------------------- */
  {
    path: '', // En path definimos el nombre de nuestra ruta. Si esta vacia es porque sera la tura inical de la app
    redirectTo: '/home', // Cuando visiten la pagina inicial, se redireccionara a la ruta llamada home. La cual debo crear
    pathMatch: 'full' // Caracteristica que se le asigna solo a la ruta inicial.
  },

  {
    path: 'home', // Nombre de la ruta
    component: HomeComponent // Componente el cual se caragar cuando se utilice la ruta /games
  },

  /* ------------------------------------- Rutas de la vista region---------------------------------------- */

  /*Se crea la ruta region*/
  {
    path: 'region',
    redirectTo: '/region',
    pathMatch: 'full'
  },
  
  /* Ruta que utiliza el cliente cuando ingresa a la vista principal de region y esta redireccionada 
    al componente logico del formulario que lista las regiones existentes*/
  {
    path: 'region', 
    component: RegionsListComponent
  },

  /* Ruta que utiliza el cliente cuando añade una nueva region y esta redireccionada al componente logico 
    del formulario para dicha accion */
  {
    path: 'region/add_region', 
    component: RegionsBodyComponent 
  },

    /* Ruta que utiliza el cliente cuando actualiza una region y esta redireccionada al componente logico 
    del formulario para dicha accion */
  {
    path: 'region/edit_region/:id_region',
    component: RegionsBodyComponent
  },
  /*-----------------------------------Rutas de la vista ciudad--------------------------------------*/

  /*Se crea la ruta region*/
  {
    path: 'city',
    redirectTo: '/city',
    pathMatch: 'full'
  },

  /* Ruta que utiliza el cliente cuando ingresa a la vista principal de region y esta redireccionada 
    al componente logico del formulario que lista las ciudades existentes */
  {
    path: 'city', 
    component: CitiesListComponent
  },

    /* Ruta que utiliza el cliente cuando añade una nueva ciudad y esta redireccionada al componente logico 
    del formulario para dicha accion */
  {
    path: 'city/add_city',
    component: CitiesBodyComponent
  },

    /* Ruta que utiliza el cliente cuando actualiza una ciudad y esta redireccionada al componente logico 
    del formulario para dicha accion */
  {
    path: 'city/edit_city/:id_ciudad',
    component: CitiesBodyComponent
  },
  /*-----------------------------------Rutas de la vista rango----------------------------------------*/

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})

//Exporto la clase que sera utilizada por las demas clases
export class AppRoutingModule { }