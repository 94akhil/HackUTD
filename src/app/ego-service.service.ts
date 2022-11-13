import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EgoServiceService {

  url = 'http://localhost:4000'
  
  constructor(private http: HttpClient) { }

  getAstroidCostDetails(){
    return this.http.get('/api/get_cost_and_time_all')
  }
}


// url = 'http://ec2-3-233-250-124.compute-1.amazonaws.com:8899/'
  
//   constructor(private http: HttpClient) { }

//   getAstroidCostDetails(){
//     // return this.http.get('/api/get_cost_and_time_all')
//     return this.http.get(this.url+'get_cost_and_time_all')
//   }