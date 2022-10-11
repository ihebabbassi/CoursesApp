import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import {AddCourseComponent} from './add-course/add-course.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {SignupComponent} from './signup/signup.component'
import { LoginComponent } from './login/login.component';
import { ProviderDashboardComponent } from './provider-dashboard/provider-dashboard.component';

const routes: Routes = [
  {path: 'courses', component: CoursesComponent},
  {path: 'addcourse', component:AddCourseComponent},
  {path: 'coursedetail/:id', component:CourseDetailsComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: ProviderDashboardComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
