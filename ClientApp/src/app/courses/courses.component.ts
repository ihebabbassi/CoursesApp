import { Component } from '@angular/core';
import {CoursesService} from '../courses.service'
import {course} from '../../course.model'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{
  constructor(private course:CoursesService){}
  courses: course[]=[];
  courseData: any=[];
  ngOnInit():void{
    this.course.getAllCourses().subscribe((allData)=>{
      console.log(allData);
      this.courseData=allData;
      
    })
  }
  getTotalCourses(){
    return this.courseData.length;
  }
  getTotalFreeCourses(){
    return this.courses.filter(course => course.type === 'Free').length;

  }
  getTotalPremiumCourses(){
    return this.courses.filter(course => course.type === 'Premium').length;
  }


  courseCountRadioButton: string = 'All';
  searchText: string = '';

  onFilterRadioButtonChanged(data: string){
    this.courseCountRadioButton = data;
    //console.log(this.courseCountRadioButton);
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    //console.log(this.searchText);
  }

}
