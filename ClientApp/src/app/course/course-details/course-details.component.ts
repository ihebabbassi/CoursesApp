import { Component, OnInit } from '@angular/core';
import { course } from '../../model/course.model';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  selectedCourse: any;

  Course: course;
  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private router: Router
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
