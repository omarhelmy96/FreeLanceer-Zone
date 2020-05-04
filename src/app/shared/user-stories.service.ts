import { Injectable } from '@angular/core';
import { Freelancer } from '../ViewModel/freelancer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoriesService {
  constructor(private httpClient:HttpClient) { }

  getFreelancerWithStories():Observable<Freelancer[]>{
    
    return this.httpClient.get<Freelancer[]>('http://localhost:2687/api/Freelancer/getStories');
    
  }
  getFreelancerWithOpinion():Observable<Freelancer[]>{
    
    return this.httpClient.get<Freelancer[]>('http://localhost:2687/api/Freelancer/getOpinion');

  }
}
