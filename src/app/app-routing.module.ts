import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './component/index/index.component';


const routes: Routes = [
  {
    path:'',
    component: IndexComponent
  },
  { 
    path: 'propuestas', 
    loadChildren: () => import('./component/propuestas/propuestas.module').then(m => m.PropuestasModule) 
  }, 
  { 
    path: 'partido', 
    loadChildren: () => import('./component/partido/partido.module').then(m => m.PartidoModule) 
  }, 
  { 
    path: 'agendas-y-medios', 
    loadChildren: () => import('./component/agendas-y-medios/agendas-y-medios.module').then(m => m.AgendasYMediosModule) 
  }, 
  { 
    path: 'contacto', 
    loadChildren: () => import('./component/contacto/contacto.module').then(m => m.ContactoModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
