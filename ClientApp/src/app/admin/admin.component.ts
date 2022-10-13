import { Component, OnInit } from '@angular/core';
import { AdminService } from './../services/admin.service';
import { User } from './../model/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  users:any = [];
  constructor(private adminService: AdminService, private http: HttpClient) {}
  name: "aaa";
  baseURL = 'http://localhost:3000/users';
  ngOnInit(): void {
    this.getProviderNotActivated();
    
    
    
  }

  getProviderNotActivated() {
    this.adminService.getUserStatus('false').subscribe((data) => {
      
      this.users = data;
      console.log('users', this.users);
    });
  }

  approveProvider(id: number) { 
    let body:any;
    body={
      Activation: true
    }
    this.http.patch(this.baseURL + '/' + id, body).subscribe((data) => {
      console.log('udpated',data);
    });
  }

  
}
