import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EgoServiceService {

  url = 'http://localhost:4000/api/'
  
  constructor(private http: HttpClient) { }

  getAstroidCostDetails(){
    return this.http.get('/api/get_cost_and_time_all')
  }
}
