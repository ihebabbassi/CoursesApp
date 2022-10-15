import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './course/courses-list/courses.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { BookCourseComponent } from './course/book-course/book-course.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ProviderDashboardComponent } from './provider/provider-dashboard/provider-dashboard.component';
import { WaitApprovementComponent } from './provider/wait-approvement/wait-approvement.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateCourseComponent } from './course/update-course/update-course.component';
import { StudntSignupComponent } from './auth/studnt-signup/studnt-signup.component';
import { DashboardStudentComponent } from './student/dashboard-student/dashboard-student.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FilterComponent,
    HeaderComponent,
    SearchComponent,
    AddCourseComponent,
    CourseDetailsComponent,
    BookCourseComponent,
    SignupComponent,
    LoginComponent,
    ProviderDashboardComponent,
    WaitApprovementComponent,
    AdminComponent,
    UpdateCourseComponent,
    StudntSignupComponent,
    DashboardStudentComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
