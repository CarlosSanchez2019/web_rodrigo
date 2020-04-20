import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Rodrigo Albernaz | Diputado 2020 - 2025')
   }

  ngOnInit(): void {
  }

}
