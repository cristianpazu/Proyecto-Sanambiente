import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // lo importo para que funcione en conjunto con httpClient

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/Header/Header.component';
import { NavigationComponent } from './Components/Navigation/Navigation.component';
import { HomeComponent } from './Components/body/Home/Home.component';

import { RegionsBodyComponent } from './Components/body/Regions_Body/Regions_Body.component';
import { RegionsService } from './Services/Regions_Service/Regions_Service';
import { RegionsListComponent } from './Components/body/Regions_List/Regions_List.component';

import { CitiesBodyComponent } from './Components/body/Cities_Body/Cities_Body.component';
import { CitiesService } from './Services/Cities_Service/Cities_Service';
import { CitiesListComponent } from './Components/body/Cities_List/Cities_List.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter'; // importar para el filtro de las tablas
import BaseService from './Services/Base_Service/Base_Service';
import { RanksBodyComponent } from './Components/Body/Ranks_Body/Ranks_Body.component';
import { RanksListComponent } from './Components//Body/Ranks_List/Ranks_List.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    RegionsBodyComponent,
    RegionsListComponent,
    CitiesBodyComponent,
    CitiesListComponent,
    RanksBodyComponent,
    RanksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [
    RegionsService, // es el proveedor de los metodos para pedir los datos
    CitiesService,
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
