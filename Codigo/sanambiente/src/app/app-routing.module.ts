import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/body/home/home.component';
import { RegionComponent } from './components/body/region/region.component';
import { CiudadComponent } from './components/body/ciudad/ciudad.component';
import { MttoComponent } from './components/body/mtto/mtto.component';
import { AlertaComponent } from './components/body/alerta/alerta.component';
import { OrganizacionComponent } from './components/body/organizacion/organizacion.component';
import { CategoriaComponent } from './components/body/categoria/categoria.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'region', component: RegionComponent },
  { path: 'ciudad', component: CiudadComponent },
  { path: 'mtto', component:MttoComponent },
  { path: 'alerta', component:AlertaComponent },
  { path: 'organizacion', component:OrganizacionComponent },
  { path: 'categoria', component:CategoriaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
