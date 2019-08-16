import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/body/home/home.component';
import { RegionComponent } from './components/body/region/region.component';
import { CiudadComponent } from './components/body/ciudad/ciudad.component';
import { AlertaComponent } from './components/body/alerta/alerta.component';
import { MttoComponent } from './components/body/mtto/mtto.component';
import { OrganizacionComponent } from './components/body/organizacion/organizacion.component';
import { CategoriaComponent } from './components/body/categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    RegionComponent,
    CiudadComponent,
    AlertaComponent,
    MttoComponent,
    OrganizacionComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
