import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/login.service';
import {favouriteService} from '../favourite/favouriteService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public loggedIn=false;
  public userId = localStorage.getItem("userId");

  constructor(private loginService:LoginService,
    private favService:favouriteService) { }


  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
  }

  logoutUser(){
    this.loginService.logoutUser();
    location.reload();
  }

}
