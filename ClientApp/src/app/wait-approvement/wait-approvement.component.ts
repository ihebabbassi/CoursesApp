import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "./../services/token-storage.service"

@Component({
  selector: 'app-wait-approvement',
  templateUrl: './wait-approvement.component.html',
  styleUrls: ['./wait-approvement.component.css']
})
export class WaitApprovementComponent implements OnInit {
  currentUser: any;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {  this.getCurrentUser()
  }

  logout(){
    return this.tokenStorage.signOut() 
  }

  getCurrentUser(){

     this.currentUser = this.tokenStorage.getUser().user;
     console.log("this.currentUser",this.currentUser);

  }
}
