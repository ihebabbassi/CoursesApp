import { Component, OnInit } from '@angular/core';
import { course } from '../../model/course.model';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css'],
})
export class UpdateCourseComponent implements OnInit {
  Course: course;
  form!: FormGroup;
  idOfSelectedCourse: any;
  currentUser: any;

  constructor(
    private tokenStorage: TokenStorageService,
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.getbyid(p.get('id'));
        this.idOfSelectedCourse = p.get('id');
        console.log( "this.selectedCourse" ,this.idOfSelectedCourse , p.get('id')); // p['id]
      },
    });
  }
  getCurrentUser() {
    this.currentUser = this.tokenStorage.getUser().user;
    console.log('this.currentUser', this.currentUser);
  }
  getbyid(id: any) {
    this.coursesService.getCourseByID(id).subscribe((data: course) => {
      this.Course = data;
      console.log('this.Course', this.Course);
    });



    this.form = new FormGroup({
      providerId: new FormControl(this.currentUser.id),
      name: new FormControl('', [Validators.required]),
      author: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
       

    });
  }
  get f(){
    return this.form.controls;
  }
    

  updateCourse( ){
    this.coursesService.update(this.idOfSelectedCourse,this.form.value).subscribe((res:any) => {
      console.log(' updated successfully!', );
    })

  }
}

