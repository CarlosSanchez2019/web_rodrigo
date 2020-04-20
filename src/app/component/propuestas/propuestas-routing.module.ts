import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropuestasComponent } from './propuestas.component';

const routes: Routes = [{ path: '', component: PropuestasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropuestasRoutingModule { }
