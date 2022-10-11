import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import {AddCourseComponent} from './add-course/add-course.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {SignupComponent} from './signup/signup.component'
import { LoginComponent } from './login/login.component';
import { ProviderDashboardComponent } from './provider-dashboard/provider-dashboard.component';
import { WaitApprovementComponent  } from './wait-approvement/wait-approvement.component';
import {ApprovementGuard} from "./approvement.guard"
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: 'courses', component: CoursesComponent, canActivate : [ApprovementGuard]},
  {path: 'addcourse', component:AddCourseComponent,canActivate : [ApprovementGuard]},
  {path: 'coursedetail/:id', component:CourseDetailsComponent, canActivate : [ApprovementGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: ProviderDashboardComponent, canActivate : [ApprovementGuard]},
  {path: 'wait-approvement', component: WaitApprovementComponent },
  {path: 'admin', component: AdminComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
