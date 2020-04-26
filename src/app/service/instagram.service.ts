import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstagramService {
  constructor(private http: HttpClient) {}
  private URI: string = 'https://www.instagram.com/cabildoabierto_uy?__a=1';
  
  getInstagram():Observable<any>{
    return this.http.get<any>(this.URI)
  }
}
