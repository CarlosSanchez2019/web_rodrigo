import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private http: HttpClient) { }
  private API:string = "https://api.instagram.com/oembed?url=https://www.instagram.com/bookartdesign"
  // getInstagram():Observable<any>{
  //   return this.http.get<any>(this.API)
  // }
}
