import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendasYMediosComponent } from './agendas-y-medios.component';

const routes: Routes = [{ path: '', component: AgendasYMediosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendasYMediosRoutingModule { }
