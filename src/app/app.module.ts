import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from "@angular/common/http";
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import {MatToolbarModule} from '@angular/material/toolbar';


import {MatTabsModule} from '@angular/material/tabs';
import { FavouriteComponent } from './favourite/favourite.component';
import { favouriteService } from './favourite/favouriteService';
import {MatButtonModule} from '@angular/material/button';
import { TrendingComponent } from './trending/trending.component';
import { gifService } from './gifService';
import { ReccomendationComponent } from './reccomendation/reccomendation.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FavouriteComponent,
    TrendingComponent,
    ReccomendationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    FlexLayoutModule,
    FormsModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule


    
  ],
  providers: [
    favouriteService,gifService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
