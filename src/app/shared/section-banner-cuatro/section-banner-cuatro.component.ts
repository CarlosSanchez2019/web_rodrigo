import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section-banner-cuatro',
  templateUrl: './section-banner-cuatro.component.html',
  styleUrls: ['./section-banner-cuatro.component.scss']
})
export class SectionBannerCuatroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoWidth:true,
    autoHeight:true,
    autoplay:true,
    margin:10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      }
    },
    nav: true
  }

}
