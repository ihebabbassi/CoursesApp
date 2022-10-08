import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  url='http://localhost:3000/courses'
  
  constructor(private http:HttpClient) { }
  getAllCourses(){
    return this.http.get(this.url)
  }
}
