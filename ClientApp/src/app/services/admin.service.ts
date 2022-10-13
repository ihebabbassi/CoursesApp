import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url='http://localhost:3000/users'
  constructor(private http:HttpClient) { }



  getUserStatus(status:string): Observable<any> {
    let params1= new HttpParams().set('Activation',status);
    return this.http.get(this.url,{params:params1});
  }

  approveProvider(id: number){
    this.http.patch(this.url + id, true)    
  }




}


