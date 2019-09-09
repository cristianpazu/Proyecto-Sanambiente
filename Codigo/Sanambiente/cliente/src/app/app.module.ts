import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // lo importo para que funcione en conjunto con httpClient


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './componentes/header/header.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { HomeComponent } from './componentes/body/home/home.component';
import { BodyRegionComponent } from './componentes/body/body-region/body-region.component';
import { RegionesService } from './servicios/serviciosRegion/regiones.service';
import {Ng2SearchPipeModule} from 'ng2-search-filter'; // instalar para el filtro de las tablas


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavegacionComponent,
    HomeComponent,
    BodyRegionComponent

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
    RegionesService // es el proveedor de los metodos para pedir los datos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
