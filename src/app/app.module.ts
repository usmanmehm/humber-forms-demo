import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileDataComponent } from './components/profile-data/profile-data.component';
import { MaxLengthDirective } from './max-length.directive';
import { ExerciseSolutionComponent } from './components/exercise-solution/exercise-solution.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDataComponent,
    MaxLengthDirective,
    ExerciseSolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
