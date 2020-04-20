import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendasYMediosRoutingModule } from './agendas-y-medios-routing.module';
import { AgendasYMediosComponent } from './agendas-y-medios.component';


@NgModule({
  declarations: [AgendasYMediosComponent],
  imports: [
    CommonModule,
    AgendasYMediosRoutingModule
  ]
})
export class AgendasYMediosModule { }
