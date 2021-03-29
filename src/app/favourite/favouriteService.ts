import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";



import { Subject } from 'rxjs';



@Injectable()
  export class favouriteService {
    public results;
    public resultSub: Subject<any> = new Subject();
    
    constructor(private http: HttpClient) {}


    getGifs(){
      // const headers_object = new HttpHeaders();
      // headers_object.append('Content-Type', 'application/json');
      // headers_object.append('Authorization', "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjE2OTk2OTUwLCJleHAiOjE2MTczNDI1NTB9.F9mc8XYBjMPxJhVa3CLlE1ZXxpOgwiA-kL13TiLZ9zY");
      // //headers_object.set('access-control-allow-origin','http://localhost:8080/');
      // const httpOptions = {
      //   headers: headers_object
      // };
      let user = localStorage.getItem("userId");
      return this.http.get(`http://localhost:8080/api/v1/gifs/${user}`);

  }

  public resultObs() {
    // Forces data to come back as an observable
    return this.resultSub.asObservable();
  }

  public setFav(favs){
    console.log(favs);
    this.results=favs;
    this.resultSub.next({
      data:favs
    })
    console.log(this.resultSub);
  }

}