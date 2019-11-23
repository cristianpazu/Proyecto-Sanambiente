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

/* Importo los componentes a los cuales se direccionaran las rutas creadas para Categorias */
import { CategoriesBodyComponent } from './Components/Body/Categories_Body/Categories_Body.component';
import { CategoriesListComponent } from './Components/Body/Categories_List/Categories_List.component';

import { RanksBodyComponent } from './Components/Body/Ranks_Body/Ranks_Body.component';
import { RanksListComponent } from './Components/Body/Ranks_List/Ranks_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para organiacion */
import { OrganizationsListComponent } from './Components/Body/Organizations_List/Organizations_List.component';
import { OrganizationsBodyComponent } from './Components/Body/Organizations_Body/Organizations_Body.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para alerta */
import { AlertsBodyComponent } from './Components/Body/Alerts_Body/Alerts_Body.component';
import { AlertsListComponent } from './Components/Body/Alerts_List/Alerts_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para Base de Tiempo */
import { TimesBodyComponent } from './Components/Body/Times_Body/Times_Body.component';
import { TimesListComponent } from './Components/Body/Times_List/Times_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para estaciones */
import { StationsBodyComponent } from './Components/Body/Stations_Body/Stations_Body.component';
import { StationsListComponent } from './Components/Body/Stations_List/Stations_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para gmt */
import { GmtBodyComponent } from './Components/Body/Gmt_Body/Gmt_Body.component';
import { GmtListComponent } from './Components/Body/Gmt_List/Gmt_List.component';


/* ------ Rutas de las vistas ------- */
const rutas: Routes = [

  /*--- Ruta de vista principal ---*/
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, // Ruta para la pagina vista principal

  /*--- Rutas de region ---*/
  { path: 'region', redirectTo: '/region', pathMatch: 'full' },
  { path: 'region', component: RegionsListComponent }, // Ruta para listar todos los registros  
  { path: 'region/add_region', component: RegionsBodyComponent },  // Ruta para adicionar registros  
  { path: 'region/edit_region/:id_region', component: RegionsBodyComponent }, // Ruta para editar registros 

  /*--- Rutas de Organizacion ---*/
  { path: 'category', redirectTo: '/category', pathMatch: 'full' },
  { path: 'category', component: CategoriesListComponent }, // Ruta para listar todos los registros  
  { path: 'category/add_category', component: CategoriesBodyComponent },  // Ruta para adicionar registros  
  { path: 'category/edit_category/:id_categoria', component: CategoriesBodyComponent }, // Ruta para editar registros  

  /*--- Rutas de ciudad ---*/
  { path: 'city', redirectTo: '/city', pathMatch: 'full' },
  { path: 'city', component: CitiesListComponent },
  { path: 'city/add_city', component: CitiesBodyComponent },
  { path: 'city/edit_city/:id_ciudad', component: CitiesBodyComponent },

  /*--- Rutas de alerta ---*/
  { path: 'alert', redirectTo: '/alert', pathMatch: 'full' },
  { path: 'alert', component: AlertsListComponent }, // Ruta para listar todos los registros  
  { path: 'alert/add_alert', component: AlertsBodyComponent },  // Ruta para adicionar registros  
  { path: 'alert/edit_alert/:id_alerta', component: AlertsBodyComponent }, // Ruta para editar registros

  /*--- Rutas de rango ---*/
  { path: 'rank', redirectTo: '/rank', pathMatch: 'full' },
  { path: 'rank', component: RanksListComponent }, // Ruta para listar todos los registros  
  { path: 'rank/add_rank', component: RanksBodyComponent },  // Ruta para adicionar registros  
  { path: 'rank/edit_rank/:id_rango', component: RanksBodyComponent }, // Ruta para editar registros

  /*--- Rutas de Organizacion ---*/
  { path: 'organization', redirectTo: '/organization', pathMatch: 'full' },
  { path: 'organization', component: OrganizationsListComponent }, // Ruta para listar todos los registros  
  { path: 'organization/add_organization', component: OrganizationsBodyComponent },  // Ruta para adicionar registros  
  { path: 'organization/edit_organization/:id_organizacion', component: OrganizationsBodyComponent }, // Ruta para editar registros

  /*--- Rutas de Estaciones ---*/
  { path: 'station', redirectTo: '/station', pathMatch: 'full' },
  { path: 'station', component: StationsListComponent }, // Ruta para listar todos los registros  
  { path: 'station/add_station', component: StationsBodyComponent },  // Ruta para adicionar registros  
  { path: 'station/edit_station/:id_estacion', component: StationsBodyComponent }, // Ruta para editar registros

  /*--- Rutas de Gmt ---*/
  { path: 'gmt', redirectTo: '/gmt', pathMatch: 'full' },
  { path: 'gmt', component: GmtListComponent }, // Ruta para listar todos los registros  
  { path: 'gmt/add_gmt', component: GmtBodyComponent },  // Ruta para adicionar registros  
  { path: 'gmt/edit_gmt/:id_gmt', component: GmtBodyComponent }, // Ruta para editar registros

  /*--- Rutas de base de tiempo ---*/
  { path: 'time', redirectTo: '/time', pathMatch: 'full' },
  { path: 'time', component: TimesListComponent }, // Ruta para listar todos los registros  
  { path: 'time/add_time', component: TimesBodyComponent },  // Ruta para adicionar registros  
  { path: 'time/edit_time/:id_tiempo', component: TimesBodyComponent }, // Ruta para editar registros

];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})

//Exporto la clase que sera utilizada por las demas clases
export class AppRoutingModule { }