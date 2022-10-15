import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { course } from '../../model/course.model';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {

  constructor(private course: CoursesService,    private tokenStorage: TokenStorageService ) {}
    currentUser: any;
    role:string;
  courses: course[] = [];
  courseData: any = [];
  ngOnInit(): void {
    this.course.getAllCourses().subscribe((allData) => {
      console.log(allData);
      this.courseData = allData;
    });
    this.getCurrentUser();
  }
  getTotalCourses() {
    return this.courseData.length;
  }
  getTotalFreeCourses() {
    return this.courses.filter((course) => course.type === 'Free').length;
  }
  getTotalPremiumCourses() {
    return this.courses.filter((course) => course.type === 'Premium').length;
  }

  courseCountRadioButton: string = 'All';
  searchText: string = '';

  onFilterRadioButtonChanged(data: string) {
    this.courseCountRadioButton = data;
    //console.log(this.courseCountRadioButton);
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    //console.log(this.searchText);
  }
  logout() {
    return this.tokenStorage.signOut();
  }

  getCurrentUser() {
    this.currentUser = this.tokenStorage.getUser().user;
    this.role = this.currentUser.role
    console.log('this.currentUser', this.currentUser);
    console.log('this.role', this.role);

  }
}
