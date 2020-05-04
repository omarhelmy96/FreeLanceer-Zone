import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zone } from '../ViewModel/zone';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  constructor(private httpClient:HttpClient) { }
  getAllZones():Observable<Zone[]>{
    return this.httpClient.get<Zone[]>('http://localhost:2687/api/Zones');
    
  }
  DeleteZone(ZoneID:number):Observable<{}>{
    
    return this.httpClient.delete(environment.ApiUri+'/Zones/'+ZoneID).pipe(
    );
 }
 getZone(ZoneID:number):Observable<Zone>{
   console.log(ZoneID); 
  return this.httpClient.get<Zone>(environment.ApiUri+'/Zones/'+ZoneID);
}
PutZone(id :number,name :string,capacity :number,place :string,available :number,
  numberOfRooms :number,fileToUpload: File):Observable<{}>
  {
    console.log(fileToUpload.name)
    var formData: FormData = new FormData();
    console.log(name+id.toString());
    formData.append('id', id.toString());
    formData.append('name', name);
    formData.append('capacity', capacity.toString());
    formData.append('place', place);
    formData.append('available', available.toString());
    formData.append('numberOfRooms', numberOfRooms.toString());
    formData.append('imageUrl', fileToUpload);
    console.log(place);
    return this.httpClient.put('http://localhost:2687/api/Zones/put', formData).pipe(
      );;
  }
  postZone(id :number,name :string,capacity :number,place :string,available :number,
    numberOfRooms :number,fileToUpload: File)
    {
      console.log(fileToUpload.name)
    var formData: FormData = new FormData();
    console.log(name+id.toString());
    formData.append('id', id.toString());
    formData.append('name', name);
    formData.append('capacity', capacity.toString());
    formData.append('place', place);
    formData.append('available', available.toString());
    formData.append('numberOfRooms', numberOfRooms.toString());
    formData.append('imageUrl', fileToUpload);
    console.log(place);
    return this.httpClient.post('http://localhost:2687/api/Zones/post', formData).pipe(
      );
    }
}
