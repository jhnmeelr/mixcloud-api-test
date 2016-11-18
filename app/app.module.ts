import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { SearchComponent }  from './components/search/search.component';

import { SearchService } from './services/search.service'
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, SearchComponent ],
  providers: [ SearchService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
