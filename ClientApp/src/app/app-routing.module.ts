import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AddCourseComponent} from "./add-course/add-course.component"
import {CoursesComponent} from "./courses/courses.component"

const routes: Routes = [

  { path: '', component: CoursesComponent },
  { path: 'AddCourse', component: AddCourseComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
