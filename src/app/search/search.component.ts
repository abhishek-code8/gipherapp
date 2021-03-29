import { Component, OnInit } from '@angular/core';
import { gifService} from "../gifService";
import { UserInput } from "../user-input";
import { take } from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class  SearchComponent implements OnInit {
  searchresults:any;
  searchReccomendations:Array<string>=[];

  constructor(private giphy: gifService) { }

  ui: UserInput = new UserInput();
  private giphyData: any;

  ngOnInit() {
  }

  search(){
  
    // this.giphyData = this.giphy.recosObs.subscribe(sresults => {
    //   this.searchresults = sresults.data;
    //   console.log(sresults.data);

    // });
    let user = localStorage.getItem("userId");
     this.giphy.searchGifs(this.ui).pipe( take(1) ).subscribe((res: any) => {

      this.giphy.setsResults(res.data);
      this.giphy.searchRecos(this.ui).pipe( take(1) ).subscribe((res: any) => {

        this.giphy.setReccomendations(res.data);
       for(var x in res.data){
         console.log(x);
         this.giphy.postReccomendation(user,res.data[x].name);
       }
      //  console.log(this.searchReccomendations);
      //  this.searchReccomendations=[];
          
      });
        
      this.ui.userInput = '';
    });
    this.giphyData = this.giphy.sresultObs().subscribe(sresults => {
      this.searchresults = sresults.data;
      console.log("hell")

    });
  }
  addFav(url,name){
    let user = localStorage.getItem("userId");
    console.log(url)
    console.log(name)
    this.giphy.postUrl(user,url);

  }

}
