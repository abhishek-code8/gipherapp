import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:2212/api/v1/auth/register';

  constructor(private httpClient: HttpClient) { }

  // send user cred
  sendUserdata(credentials:any){
    return this.httpClient.post(`${this.url}`, credentials);
  }
}
