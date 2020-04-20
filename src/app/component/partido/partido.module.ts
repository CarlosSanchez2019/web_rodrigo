import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidoRoutingModule } from './partido-routing.module';
import { PartidoComponent } from './partido.component';


@NgModule({
  declarations: [PartidoComponent],
  imports: [
    CommonModule,
    PartidoRoutingModule
  ]
})
export class PartidoModule { }
