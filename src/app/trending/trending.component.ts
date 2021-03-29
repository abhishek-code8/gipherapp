import { Component, OnInit } from '@angular/core';
import {gifService} from '../gifService';
import {UserInput} from '../user-input';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  title = 'gifer-front';
  results: any;
  private giphyData: any;
  ui: UserInput = new UserInput();

  constructor(private giphy : gifService) { }

  ngOnInit() {
    console.log("rendered")
    this.giphy.getGifs().pipe().subscribe((res: any) => {

      this.giphy.setResults(res.data);
        
    });
    this.giphyData = this.giphy.resultObs().subscribe(results => {
      this.results = results.data;
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
