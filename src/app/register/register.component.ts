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
    userEmail:''
    
  }
  rePassword="";

  submitted = false;

  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  addUser(){
    // send user cred to backend
    if((this.credentials.userId!='' && this.credentials.userPassword!='') && (this.credentials.userId!=null)){
      this.registerService.sendUserdata(this.credentials).subscribe(
        (res:any)=> {
          console.log("Logged in");
          alert("Registered successfully! Taking to login page");
          // redirect to login page
          this.submitted = true;
          window.location.href="/login";
        },
        error=> {
          // console.log(error.error.text);
          if(error.error.text==="User Registered Successfully"){
            console.log("entered")
            alert("Registered successfully! Taking to login page");
            // redirect to login page
            this.submitted = true;
            window.location.href="/login";

          }
          else{
          alert("User Already exists");
          }

        }
      );
    } else {
      alert("Please fill all fields");

      console.log('Invalid!')
      return;
    }
    // window.location.href="/login";

  }

}
