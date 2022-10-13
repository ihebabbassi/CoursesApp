import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "./../services/token-storage.service"
import {CoursesService} from './../courses.service'
import {course} from '../course.model'

@Component({
  selector: 'app-provider-dashboard',
  templateUrl: './provider-dashboard.component.html',
  styleUrls: ['./provider-dashboard.component.css']
})
export class ProviderDashboardComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService , private coursesService: CoursesService) { }
  currentUser: any;
  courseData: any=[];
  
  ngOnInit(): void {
    this.getCurrentUser();
    this.getProviderCourses();
  }

  logout(){
    return this.tokenStorage.signOut() 
  }

  getCurrentUser(){

     this.currentUser = this.tokenStorage.getUser().user;
     console.log("this.currentUser",this.currentUser);

  }
  getProviderCourses(){
   this.coursesService.getProviderCourses(this.currentUser.id).subscribe((data)=>{
    console.log('data', data)
    this.courseData=data;
    console.log('this.courseData', this.courseData)
    ;})  }



    deleteCourse(id:number){
      this.coursesService.delete(id).subscribe(res => {
           console.log('Post deleted successfully!' , res);
      })
    }


  }
