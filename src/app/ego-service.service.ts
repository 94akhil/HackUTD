import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EgoServiceService {

  url = 'http://ec2-3-233-250-124.compute-1.amazonaws.com:8899/'

  
  constructor(private http: HttpClient) { }

  getAstroidCostDetails(){
    // return this.http.get('/api/get_cost_and_time_all')
    return this.http.get(this.url+'get_cost_and_time_all')
  }

  getAstroidEfficiency(id){
    // return this.http.get('/api/get_efficiencies?asteroid_id='+id)
    return this.http.get(this.url+'get_efficiencies?asteroid_id='+id)
  }

  getAstroidParameters(id, parameter){
    // return this.http.get('/api/get_column?asteroid_id='+2+'&column_name='+parameter)
    return this.http.get(this.url+'get_column?asteroid_id='+id+'&column_name='+parameter)
  }
}