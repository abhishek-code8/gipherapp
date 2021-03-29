
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {favouriteService} from './favouriteService';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  dataFav : any;
  constructor(private favser : favouriteService) { }

  ngOnInit(): void {
    console.log("Extracting data");
    this.favser.getGifs().pipe().subscribe((res:any)=>{
      this.favser.setFav(res);
    });
    this.dataFav = this.favser.resultObs().subscribe(results =>{
      console.log(results);
      this.dataFav = results;
      console.log("Done with obs");
    })
    console.log(this.dataFav);
  }

}
