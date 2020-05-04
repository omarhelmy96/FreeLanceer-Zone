import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Sponsor } from '../ViewModel/sponsor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  constructor(private httpClient:HttpClient) { }
  getAllImageSponsor():Observable<Sponsor[]>{
    return this.httpClient.get<Sponsor[]>('http://localhost:2687/api/Sponsor');
    
  }
  postSponsor(fileToUpload: File)
  {
    console.log("this post")
    var formData: FormData = new FormData();
    var id:string='1';
    formData.append('id', id);
    formData.append('imageName', fileToUpload);
    console.log(fileToUpload)
    console.log(formData);
    return this.httpClient.post('http://localhost:2687/api/Sponsor/post', formData).pipe();

  }
  DeleteSponsor(SponsorID:number):Observable<{}>{
    
    return this.httpClient.delete(environment.ApiUri+'/Sponsor/'+SponsorID).pipe(
    );
 }
}
