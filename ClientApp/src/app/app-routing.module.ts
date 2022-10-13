import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './course/courses-list/courses.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { BookCourseComponent } from './course/book-course/book-course.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ProviderDashboardComponent } from './provider/provider-dashboard/provider-dashboard.component';
import { WaitApprovementComponent } from './provider/wait-approvement/wait-approvement.component';
import { AdminComponent } from './admin/admin.component';
import { ApprovementGuard } from './guards/approvement.guard';
import { UpdateCourseComponent } from './course/update-course/update-course.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'addcourse', component: AddCourseComponent },
  { path: 'coursedetail/:id', component: CourseDetailsComponent },
  { path: 'book/:id', component: BookCourseComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: ProviderDashboardComponent },
  { path: 'wait-approvement', component: WaitApprovementComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'update-course/:id', component: UpdateCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
