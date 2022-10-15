import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studnt-signup',
  templateUrl: './studnt-signup.component.html',
  styleUrls: ['./studnt-signup.component.css']
})
export class StudntSignupComponent implements OnInit {

  student: Student = {
    name: '',
    address: '',
    email: '',
    password: '',
    role: 'Student',
    coin:0
  };
  submitted = false;

  constructor(private authservice: AuthService, private router: Router) {}


  ngOnInit(): void {
  }
  saveUser(): void {
    const data = {
      name: this.student.name,
      address: this.student.address,
      email: this.student.email,
      password: this.student.password,
      role: this.student.role,
    };

    this.authservice.createUser(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.newStudent();
        this.router.navigateByUrl('/login');
      },
      error: (e) => console.error(e),
    });
  }


  newStudent(): void {
    this.submitted = false;
    this.student = {
      name: '',
      address: '',
      email: '',
      password: '',
      role: 'student',
      coin:0
    };
  }
}
