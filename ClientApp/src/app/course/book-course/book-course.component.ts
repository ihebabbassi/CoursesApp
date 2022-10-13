import { Component, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { course } from '../../model/course.model';
@Component({
  selector: 'app-book-course',
  templateUrl: './book-course.component.html',
  styleUrls: ['./book-course.component.css'],
})
export class BookCourseComponent implements OnInit {
  Course: course;
  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
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
}
