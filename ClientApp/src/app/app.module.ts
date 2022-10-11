import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProviderDashboardComponent } from './provider-dashboard/provider-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FilterComponent,
    HeaderComponent,
    SearchComponent,
    AddCourseComponent,
    CourseDetailsComponent,
    SignupComponent,
    LoginComponent,
    ProviderDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
