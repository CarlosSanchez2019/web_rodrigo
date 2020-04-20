import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropuestasRoutingModule } from './propuestas-routing.module';
import { PropuestasComponent } from './propuestas.component';
import { Title } from '@angular/platform-browser';


@NgModule({
  declarations: [PropuestasComponent],
  imports: [
    CommonModule,
    PropuestasRoutingModule
  ]
})
export class PropuestasModule implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Propuestas - Rodrigo Albernaz')
  }
  ngOnInit(): void {
  }
}
