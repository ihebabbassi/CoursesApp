import { Component, OnInit } from '@angular/core';
import {AdminService} from './../services/admin.service'
import {User} from './../model/user'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
users: User[]= [];
  constructor(private adminService:AdminService, private http  : HttpClient) { }
  x:any;
  ngOnInit(): void {
  }

  getProviderNotActivated(){
    this.adminService.getUserStatus("false").subscribe((data)=>{console.log(data);})
    
  }


}