import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:2212/api/v1/auth/login"

  constructor(private httpClient: HttpClient) { }

  // generate token from server

  generateToken(credentials:any){
    console.log("In gen token");
    localStorage.setItem("userId", credentials.userId);
    return this.httpClient.post(`${this.url}`, credentials);
  }


  // for logging in user
  loginUser(token: string){
    console.log("in loginUSer");
    
    localStorage.setItem("token", token);
    console.log(localStorage.getItem('token'));
    return true
  }
  
  // check if logged in
  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token == undefined || token == null || token == ''){
      return false;
    } else {
      return true;
    }
  }

  // logout user
  logoutUser(){
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  }

  // get token
  getToken(){
    return localStorage.getItem("token");
  }
  
  getUserId(){
    return localStorage.getItem("userId");
  }
}
