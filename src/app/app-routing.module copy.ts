import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';
import { ReccomendationComponent } from './reccomendation/reccomendation.component';
import { SearchComponent } from './search/search.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [

  {
    path:'favourite', component:FavouriteComponent
  },
  {
    path:"recommended", component:ReccomendationComponent
  },
  {
    path:"search", component:SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
