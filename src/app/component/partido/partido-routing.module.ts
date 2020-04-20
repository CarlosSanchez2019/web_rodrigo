import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartidoComponent } from './partido.component';

const routes: Routes = [{ path: '', component: PartidoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidoRoutingModule { }
