import { BrowserModule } from '@angular/platform-browser'; // Angular lo importa por defecto
import { NgModule } from '@angular/core'; // Angular lo importa por defecto
import { HttpClientModule } from '@angular/common/http'; // Importo para que funcione en conjunto con httpClient

import { AppRoutingModule } from './app-routing.module'; // Permite trabajar con rutas
import { AppComponent } from './app.component'; // Angular lo importa por defecto
import { FormsModule } from '@angular/forms'; // Permite crear validaciones a los formularios
import { ReactiveFormsModule } from '@angular/forms'; // Permite trabajar con formularios reactivos
import { HeaderComponent } from './Components/Header/Header.component'; // Importo el componente Header (Barra de menu)
import { NavigationComponent } from './Components/Navigation/Navigation.component'; // Importo el componente navigation (Menu de navegacion)
import { HomeComponent } from './Components/Body/Home/Home.component'; // Importo el componente home (Vista del inicio)

/* Importo los componentes y servicios creados para region*/
import { RegionsBodyComponent } from './Components/body/Regions_Body/Regions_Body.component';
import { RegionsService } from './Services/Regions_Service/Regions_Service';
import { RegionsListComponent } from './Components/body/Regions_List/Regions_List.component';

/* Importo los componentes y servicios creados para ciudad*/
import { CitiesBodyComponent } from './Components/body/Cities_Body/Cities_Body.component';
import { CitiesService } from './Services/Cities_Service/Cities_Service';
import { CitiesListComponent } from './Components/body/Cities_List/Cities_List.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter'; // Importar para el filtro (busqueda) de las tablas
import BaseService from './Services/Base_Service/Base_Service'; // Importar los servicios de la clase Base_Service

/* Importo los componentes y servicios creados para rango*/
import { RanksBodyComponent } from './Components/Body/Ranks_Body/Ranks_Body.component';
import { RanksListComponent } from './Components//Body/Ranks_List/Ranks_List.component';

import { CategoriesBodyComponent } from './Components/Body/Categories_Body/Categories_Body.component';
import { CategoriesListComponent } from './Components/Body/Categories_List/Categories_List.component';
import { CategoriesService } from './Services/Categories_Service/Categories_Service';



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
    CategoriesBodyComponent,
    CategoriesListComponent
    
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
    RegionsService, // Es el proveedor de los metodos para pedir los datos
    CitiesService,
    CategoriesService,
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
