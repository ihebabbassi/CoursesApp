import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "./../services/token-storage.service"

@Component({
  selector: 'app-provider-dashboard',
  templateUrl: './provider-dashboard.component.html',
  styleUrls: ['./provider-dashboard.component.css']
})
export class ProviderDashboardComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService) { }
  currentUser: any;

  ngOnInit(): void {
    this.getCurrentUser()
  }

  logout(){
    return this.tokenStorage.signOut() 
  }

  getCurrentUser(){

     this.currentUser = this.tokenStorage.getUser().user;
     console.log("this.currentUser",this.currentUser);

  }
}
