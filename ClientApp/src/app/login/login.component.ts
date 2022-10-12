import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "./../auth.service";
import {TokenStorageService} from "./../services/token-storage.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService , private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().user.role;
      this.navigateToDashboard();

      console.log("this.rolesssssss ",this.roles);
      console.log("this.tokenStorage.getToken()",this.tokenStorage.getToken());
      
      
    }
  }


  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log("data",data);
        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser();
        console.log( "this.roles", this.roles);
        
        this.reloadPage();
        
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  navigateToDashboard() {
    this.router.navigateByUrl('/dashboard')
  }
}
