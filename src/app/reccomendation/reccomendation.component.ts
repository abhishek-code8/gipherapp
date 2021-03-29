import { Component, OnInit } from '@angular/core';
import { gifService} from "../gifService";

@Component({
  selector: 'app-reccomendation',
  templateUrl: './reccomendation.component.html',
  styleUrls: ['./reccomendation.component.css']
})
export class ReccomendationComponent implements OnInit {
  recos:Array<string>=[];
  results:Array<any>=[];
  constructor(private giphy: gifService) {}
  ngOnInit():void {
    console.log("I am here")
    this.giphy.getReccos().pipe().subscribe((res:any)=>{
    console.log(res)
    this.recos=res;
    console.log(this.recos);
    for(var x in this.recos){
      console.log(this.recos[x])
    this.giphy.searchrecoGifs(this.recos[x]).subscribe((res: any) => {
      this.results.push(res.data);
      console.log(this.results)
        
    });

  }
   
    });
 
  }
}
