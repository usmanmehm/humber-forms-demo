import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileDataComponent } from './components/profile-data/profile-data.component';
import { SampleModule } from './sample/sample.module';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDataComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
