import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { CoursesService } from '../../services/courses.service';
import { course } from '../../model/course.model';
@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrls: ['./dashboard-student.component.css']
})
export class DashboardStudentComponent implements OnInit {
  currentUser: any;
  courseData: any = [];
  constructor(
    private tokenStorage: TokenStorageService,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    
  }
  logout() {
    return this.tokenStorage.signOut();
  }

  getCurrentUser() {
    this.currentUser = this.tokenStorage.getUser().user;
    console.log('this.currentUser', this.currentUser);
  }

}
