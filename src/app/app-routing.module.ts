import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FavouriteComponent } from './favourite/favourite.component';
import { LoginComponent } from './login/login.component';
import { ReccomendationComponent } from './reccomendation/reccomendation.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [

  {
    path:'favourite', component:FavouriteComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"recommended", component:ReccomendationComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"search", component:SearchComponent
  },
  {
    path:"",component:TrendingComponent
  },
  {path:'login', 
  component:LoginComponent},

  {path:'register',
  component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
