import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { UserInput } from "./user-input";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class gifService {

  ui: UserInput = new UserInput();

  private apiUrl = '';
  public results;
  public sresults;
  public reccomendations;

  // A Rxjs Subject is a special type of Observable that allows values to be multicasted to many observers.
  public resultsSub: Subject<any> = new Subject();
  public sresultsSub: Subject<any> = new Subject();
  public recosSub: Subject<any> = new Subject();


  constructor(private http: HttpClient) {}

  getGifs() {
      console.log("get gifs")
    this.apiUrl = `http://api.giphy.com/v1/gifs/trending?api_key=MidYvE2Xq4b72iTjZgLLoTG7w4xEYEA5`; //Enter GIPHY API key after equals sign
    return this.http.get(`${this.apiUrl}`); 
  }
  getReccos(){
    let user = localStorage.getItem("userId");
    this.apiUrl = `http://localhost:8090/api/v1/reccomendations/${user}`; //Enter GIPHY API key after equals sign
    return this.http.get(`${this.apiUrl}`);

  }
//   getGifs() {
//     console.log("get gifs")
//   this.apiUrl = `http://api.giphy.com/v1/gifs/trending?api_key=MidYvE2Xq4b72iTjZgLLoTG7w4xEYEA5`; //Enter GIPHY API key after equals sign
//   return this.http.get(`${this.apiUrl}`); 
// }
searchGifs(ui) {
    this.apiUrl = `http://api.giphy.com/v1/gifs/search?q=${ui.userInput}&api_key=MidYvE2Xq4b72iTjZgLLoTG7w4xEYEA5`; //Enter GIPHY API key after equals sign

    return this.http.get(`${this.apiUrl}`); 
  }
searchRecos(ui){
    this.apiUrl = `http://api.giphy.com/v1/tags/related/${ui.userInput}?api_key=MidYvE2Xq4b72iTjZgLLoTG7w4xEYEA5&limit=4`;
    return this.http.get(`${this.apiUrl}`); 


  }
  searchrecoGifs(recos) {
    this.apiUrl = `http://api.giphy.com/v1/gifs/search?q=${recos}&api_key=MidYvE2Xq4b72iTjZgLLoTG7w4xEYEA5&limit=3`; //Enter GIPHY API key after equals sign

    return this.http.get(`${this.apiUrl}`); 
  }
  public resultObs() {
    // Forces data to come back as an observable
    return this.resultsSub.asObservable();
  }
  public sresultObs() {
    // Forces data to come back as an observable
    return this.sresultsSub.asObservable();
  }
  public recosObs(){
    return this.recosSub.asObservable();

  }

  public setResults(results) {
    this.results = results;
    // .next returns an object with two properties of done and value
    this.resultsSub.next({
      data: results
    });
    console.log(this.resultsSub);

  }
  public setsResults(sresults) {
    this.sresults = sresults;
    // .next returns an object with two properties of done and value
    this.sresultsSub.next({
      data: sresults
    });
  }
  public setReccomendations(reccomendations) {
    this.reccomendations = reccomendations;
    // .next returns an object with two properties of done and value
    this.recosSub.next({
      data: reccomendations
    });
  }
  
  public postUrl(userId,url:String){
    console.log(url)
    this.http.post("http://localhost:8080/api/v1/gifs",{"userId":userId, "gifId":[url]}).pipe().subscribe((data)=>{
      console.log(data);
    })
  }
  public postReccomendation(userId,url:String){
    console.log(url)
    this.http.post("http://localhost:8090/api/v1/reccomendations/",{"userId":userId, "reccomendations":[url]}).pipe().subscribe((data)=>{
      console.log(data);
    })
  }
}
