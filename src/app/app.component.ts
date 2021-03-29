import { Component,HostListener } from '@angular/core';
import {UserInput} from './user-input';
import {gifService} from './gifService';

import { trigger, state, transition, style, animate } from '@angular/animations'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//   animations:[ 
//     trigger('fade',
//     [ 
//       state('void', style({ opacity : 0})),
//       transition(':enter',[ animate(300)]),
//       transition(':leave',[ animate(500)]),
//     ]
// )]
})
export class AppComponent {
  title = 'gifer-front';
  results: any;

  constructor(private giphy: gifService) {}
  ui: UserInput = new UserInput();

  private giphyData: any;

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
    console.log(url)
    console.log(name)
    this.giphy.postUrl("77",url);

  }  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //    if (window.pageYOffset > 550) {
  //      let element = document.getElementById('navbar');
  //      element?.classList.add("sticky");
  //    } else {
  //     let element = document.getElementById('navbar');
  //     element?.classList.add("sticky");
  //   }
  // }

}
