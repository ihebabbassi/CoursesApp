import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import {AddCourseComponent} from './add-course/add-course.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {BookCourseComponent} from './book-course/book-course.component'

const routes: Routes = [
  {path: 'courses', component: CoursesComponent},
  {path: 'addcourse', component:AddCourseComponent},
  {path: 'coursedetail/:id', component:CourseDetailsComponent},
  {path: 'book', component:BookCourseComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
