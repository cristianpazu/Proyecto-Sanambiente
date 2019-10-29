import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // lo importo para que funcione en conjunto con httpClient
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // importar para el filtro de las tablas
import BaseService from './Services/Base_Service/Base_Service';

import { AppRoutingModule } from './app-routing.module'; // Permite trabajar con rutas
import { AppComponent } from './app.component'; // Angular lo importa por defecto
import { FormsModule } from '@angular/forms'; // Permite crear validaciones a los formularios
import { ReactiveFormsModule } from '@angular/forms'; // Permite trabajar con formularios reactivos
import { HeaderComponent } from './Components/Header/Header.component'; // Importo el componente Header (Barra de menu)
import { NavigationComponent } from './Components/Navigation/Navigation.component'; // Importo el componente navigation (Menu de navegacion)
import { HomeComponent } from './Components/Body/Home/Home.component'; // Importo el componente home (Vista del inicio)

/* Importo los componentes y servicios creados para region */
import { RegionsBodyComponent } from './Components/body/Regions_Body/Regions_Body.component';
import { RegionsService } from './Services/Regions_Service/Regions_Service';
import { RegionsListComponent } from './Components/body/Regions_List/Regions_List.component';

/* Importo los componentes y servicios creados para ciudad */
import { CitiesBodyComponent } from './Components/body/Cities_Body/Cities_Body.component';
import { CitiesService } from './Services/Cities_Service/Cities_Service';
import { CitiesListComponent } from './Components/body/Cities_List/Cities_List.component';

/* Importo los componentes y servicios creados para organizacion */
import { OrganizationsBodyComponent } from './Components/Body/Organizations_Body/Organizations_Body.component';
import { OrganizationsService } from './Services/Organizations_Service/Organizations_Service';
import { OrganizationsListComponent } from './Components/Body/Organizations_List/Organizations_List.component';

import { RanksBodyComponent } from './Components/Body/Ranks_Body/Ranks_Body.component';
import { RanksListComponent } from './Components//Body/Ranks_List/Ranks_List.component';

@NgModule({
  declarations: [
    // Declaro los componentes o propiedades importadas desde cada clase
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    RegionsBodyComponent,
    RegionsListComponent,
    CitiesBodyComponent,
    CitiesListComponent,
    RanksBodyComponent,
    RanksListComponent,
    OrganizationsBodyComponent,
    OrganizationsListComponent
  ],
  imports: [
    // Importo los componentes que importados desde los modulos de angular
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [
    BaseService,
    RegionsService, 
    CitiesService,
    OrganizationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
