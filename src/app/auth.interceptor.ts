

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private loginService: LoginService){
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newReq = req;
        let token = this.loginService.getToken();
        let reqc = newReq;
        console.log("INTERCEPTOR ", token);
        if(token!=null){
            reqc = newReq.clone({setHeaders:{'Content-Type': 'application/json; charset=utf-8',
            Accept: 'application/json',Authorization:`Bearer ${token}`}});
        } else {
            reqc = newReq.clone({setHeaders:{'Content-Type': 'application/json; charset=utf-8',
            Accept: 'application/json'}});
        }
        return next.handle(reqc);
    }
}