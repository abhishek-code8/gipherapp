import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  credentials={
    userId: '',
    userPassword: ''
  }

  ngOnInit(): void {
  }

  logIn(){
    if((this.credentials.userId!='' && this.credentials.userPassword!='') && (this.credentials.userId!=null)){
      //generate token from backend
      
      this.loginService.generateToken(this.credentials).subscribe(
        (res:any)=> {
          console.log(res);
          
          this.loginService.loginUser(res.token);
          alert('Valid, redirecting to your dashboard');
          window.location.href="/search";
        },
        (error:any)=> {
          console.log(error);
          alert(error.error.message);
        }
      );
    } else {
      console.log('Invalid!')
    }

  }

}
