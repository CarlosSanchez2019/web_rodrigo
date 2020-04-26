import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare var jQuery: any;
declare var $: any

@Component({
  selector: 'app-section-banner-cuatro',
  templateUrl: './section-banner-cuatro.component.html',
  styleUrls: ['./section-banner-cuatro.component.scss']
})
export class SectionBannerCuatroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    lazyLoad: true,
    touchDrag: true,
    pullDrag: false,
    margin: 10,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    nav: false
  }


}
