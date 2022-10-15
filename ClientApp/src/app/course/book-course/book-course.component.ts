import { Component, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { course } from '../../model/course.model';
import { Booking} from '../../model/booking';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-book-course',
  templateUrl: './book-course.component.html',
  styleUrls: ['./book-course.component.css'],
})
export class BookCourseComponent implements OnInit {
  Course: course;
  idStudent:any
  currentUser: any;
  routeId:any
  constructor(  
  
    private tokenStorage: TokenStorageService,
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser()
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.routeId=p.get('id')
        this.getbyid(p.get('id'));
        console.log(p.get('id')); // p['id]
      },
    });
  }

  getbyid(id: any) {
    this.coursesService.getCourseByID(id).subscribe((data) => {
      this.Course = data;
      
      console.log('this.Course', this.Course);
    });
  }
  bookNow(){
    this.coursesService.booknow({
      studentid:this.idStudent,
      couseid:this.routeId
    }).subscribe({
      next: (res) => {
        console.log(res);
        
      },
      error: (e) => console.error(e),
    });
  }
  
  getCurrentUser() {
    this.currentUser = this.tokenStorage.getUser().user;
    this.idStudent= this.tokenStorage.getUser().user.id
    console.log('this.currentUser', this.tokenStorage.getUser().user.id);
  }
}
