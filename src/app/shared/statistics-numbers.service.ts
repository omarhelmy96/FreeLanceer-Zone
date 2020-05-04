import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatisticNumber } from '../ViewModel/statistic-number';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticNamberService {
  
  constructor(private httpClient:HttpClient) {
    
   }
    getAllNamber():Observable<number[]>{
    return this.httpClient.get<number[]>('http://localhost:2687/api/GetStatisticNumber');
    
  }
  getAllDescription():Observable<string[]>{
    return this.httpClient.get<string[]>('http://localhost:2687/api/GetStatisticDescription');
    
  }
  getAllStatistic():Observable<StatisticNumber[]>{
    return this.httpClient.get<StatisticNumber[]>('http://localhost:2687/api/Get').pipe();
    
  }
  GetSingleStatistic(StatisticID:number):Observable<StatisticNumber>{
    
    return this.httpClient.get<StatisticNumber>('http://localhost:2687/api/Get/'+StatisticID).pipe(
    );
 }
  DeleteStatistic(StatisticID:number):Observable<{}>{
    
    return this.httpClient.delete('http://localhost:2687/api/Delete/'+StatisticID).pipe(
    );
 }
 UpdateStaticNumber(StatisticNumber:StatisticNumber):Observable<any>{
  const httpOption = {headers:new HttpHeaders({
    'Accept':'*/*',
    'Content-Type':'application/json'
  })};
  return this.httpClient.put<any>(environment.ApiUri+'/Products/',StatisticNumber,httpOption);
}
PostStaticNumber(StatisticNumber:StatisticNumber):Observable<any>{
  const httpOption = {headers:new HttpHeaders({
    'Accept':'*/*',
    'Content-Type':'application/json'
  })};
  return this.httpClient.post<any>(environment.ApiUri+'/Post/',StatisticNumber,httpOption);
}
PutStatistic(StatisticNumber:StatisticNumber):Observable<any>{
    const httpOption = {headers:new HttpHeaders({
      'Accept':'*/*',
      'Content-Type':'application/json'
    })};
    return this.httpClient.put<any>(environment.ApiUri+'/Put/',StatisticNumber,httpOption);
  
}
}
