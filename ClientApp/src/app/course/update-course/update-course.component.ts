import { Component, OnInit } from '@angular/core';
import { course } from '../../model/course.model';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css'],
})
export class UpdateCourseComponent implements OnInit {
  Course: course;
  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.getbyid(p.get('id'));
        //console.log(this.selectedCourse , p.get('id')); // p['id]
      },
    });
  }

  getbyid(id: any) {
    this.coursesService.getCourseByID(id).subscribe((data: course) => {
      this.Course = data;
      console.log('this.Course', this.Course);
    });
  }
}
