import { Component, OnInit } from '@angular/core';
import { InstagramService } from 'src/app/service/instagram.service';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.scss']
})
export class RedesSocialesComponent implements OnInit {

  constructor(private instagramService: InstagramService) { }

  ngOnInit(): void {
    (<any>window).twttr.widgets.load();

    // this.instagramService.getInstagram()
    //   .subscribe(res => console.log(res))
  }

}
