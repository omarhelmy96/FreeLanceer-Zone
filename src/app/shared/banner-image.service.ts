import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerImageService {

  constructor( private http:HttpClient) { }

  getImages():Observable<Array<string>>{
    return this.http.get<Array<string>>('http://localhost:2687/api/BannerImages');
  }
}
