import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url='http://localhost:3000/users'
  x:any;
  constructor(private http:HttpClient) { }



  getUserNotActivated(){
    this.x = this.http.get(this.url)
  }





}


