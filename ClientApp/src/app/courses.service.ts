import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  url='http://localhost:3000/courses'
  
  constructor(private http:HttpClient) { }
  getAllCourses(){
    return this.http.get(this.url)
  }



  create(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

 // delete(id: any): Observable<any> {
   // return this.http.delete(`${this.url}/${id}`);}



}
