import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials={
    userId: '',
    userPassword: '',
    
  }

  submitted = false;

  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  addUser(){
    // send user cred to backend
    if((this.credentials.userId!='' && this.credentials.userPassword!='') && (this.credentials.userId!=null)){
      this.registerService.sendUserdata(this.credentials).subscribe(
        (res:any)=> {
          console.log(res);
          alert("Registered successfully! Taking to login page");
          // redirect to login page
          this.submitted = true;
          window.location.href="/login";
        },
        error=> {
          console.log(error);
        }
      );
    } else {
      console.log('Invalid!')
      return;
    }
  }

}
