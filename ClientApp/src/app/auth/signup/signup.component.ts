import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  Provider: User = {
    name: '',
    address: '',
    email: '',
    password: '',
    role: 'provider',
    Activation: false,
    center_name: '',
  };
  submitted = false;

  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {}

  saveUser(): void {
    const data = {
      name: this.Provider.name,
      address: this.Provider.address,
      email: this.Provider.email,
      password: this.Provider.password,
      center_name: this.Provider.center_name,
      role: this.Provider.role,
      Activation: this.Provider.Activation,
    };

    this.authservice.createUser(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.newProvider();
        this.router.navigateByUrl('/login');
      },
      error: (e) => console.error(e),
    });
  }

  newProvider(): void {
    this.submitted = false;
    this.Provider = {
      name: '',
      address: '',
      email: '',
      password: '',
      role: 'provider',
      Activation: false,
      center_name: ''
    };
  }

  navigateToDsignupstudent() {
    this.router.navigateByUrl('/student-signup');
  }
}
