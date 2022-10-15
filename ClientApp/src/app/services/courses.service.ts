import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { course } from '../model/course.model';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  url = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}
  getAllCourses() {
    return this.http.get(this.url);
  }

  getCourseByID(id: any): Observable<any> {
    return this.http.get('http://localhost:3000/courses/' + id);
  }

  getProviderCourses(id: number): Observable<any> {
    let params1 = new HttpParams().set('providerId', id);
    return this.http.get(this.url, { params: params1 });
  }

  create(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  booknow(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/Booking', data);
  }


  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(id:number, data:any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }  

}
