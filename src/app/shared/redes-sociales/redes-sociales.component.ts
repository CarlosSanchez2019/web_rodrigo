import { Component, OnInit } from '@angular/core';
import { InstagramService } from 'src/app/service/instagram.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.scss']
})
export class RedesSocialesComponent implements OnInit {

  instagram: Observable<any>
  constructor(private instagramService: InstagramService) { }

  ngOnInit(): void {
    (<any>window).twttr.widgets.load();

    this.instagramService.getInstagram()
      .subscribe(res => {
        this.instagram = res.graphql.user.edge_owner_to_timeline_media.edges;
      })

  }

}
