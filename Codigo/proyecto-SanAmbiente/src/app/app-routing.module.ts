import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstacionComponent } from './componentes/estacion/estacion.component';


const routes: Routes = [
  {path: '', component: EstacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
