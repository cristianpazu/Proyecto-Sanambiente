import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/body/home/home.component';
import { BodyRegionComponent } from './componentes/body/body-region/body-region.component';



const rutas: Routes = [

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'  
  },  
  
  { path: 'home', 
    component: HomeComponent 
  },

  { path: '',
    redirectTo: '/region',
    pathMatch: 'full'  
  },
  { path: 'region', 
    component: BodyRegionComponent 
  },

  { path: 'region/actualizarRegion/:id_region', 
  component: BodyRegionComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
const rutas: Routes = [
  { path: 'home', component: HomeComponent },  
  { path: 'region', component: BodyRegionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

*/