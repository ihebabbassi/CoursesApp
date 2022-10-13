import { Component, OnInit } from '@angular/core';
import { course } from '../../model/course.model';
import { CoursesService } from '../../services/courses.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  currentUser: any;

  Course: course = {
    name: '',
    author: '',
    duration: 0,
    type: '',
    price: 0,
    ratings: 0,
    image: '',
    description: '',
  };
  submitted = false;

  constructor(
    private coursesService: CoursesService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  saveCourse(): void {
    const data = {
      title: this.Course.name,
      author: this.Course.author,
      type: this.Course.type,
      duration: this.Course.duration,
      price: this.Course.price,
      ratings: this.Course.ratings,
      image: this.Course.image,
      description: this.Course.description,
      providerId: this.currentUser.id,
    };

    this.coursesService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newCourse(): void {
    this.submitted = false;
    this.Course = {
      name: '',
      author: '',
      duration: 0,
      type: '',
      price: 0,
      ratings: 0,
      image: '',
      description: '',
    };
  }

  getCurrentUser() {
    this.currentUser = this.tokenStorage.getUser().user;
    console.log('this.currentUser', this.currentUser);
  }
}
